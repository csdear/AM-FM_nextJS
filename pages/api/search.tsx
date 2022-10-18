// import { getSortedPostsData } from '../../lib/posts'
// getAllPost seems most akin to getSorted posts data
// PostMeta.. needed?
import { getAllPosts, PostMeta } from "@/src/api";

// will be 'posts'. log that.  the environment ternary is curious.
const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getAllPosts()
// console.log('search.ts posts', posts);
console.log('XXXsearch.ts posts', posts[0].meta.title); // the title is within the meta object property of A post.

// An endpoint for our search api.
export default (req, res) => {
  req.query.q = 'static'; // stubbed query for testing. must too be lowercase NOTE. 
  const results = req.query.q ?
    posts.filter(post => post.meta.title.toLowerCase().includes(req.query.q)) : []
  // successfully found 'static' within title 'When to Use Static Generation v.s. Server-side RenderingXxX'
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
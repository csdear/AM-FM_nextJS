import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

// similar to posts, use static props with static paths to generate
// a tag page for each tag.

export default function TagPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMeta[];
}) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h1>Tag: {slug}</h1>
      <Articles posts={posts} />
    </>
  );
}

// Get  static  props a type of GetSTaticProps imported from the "next" library.
// an async arrow fn() that rtns the props to use in each Tag page.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // receives that  params object we created below in getStaticPaths()
  // if we rec "javascript" 4eg, we need to go through each .mdx file
  // filter thourgh meta.tags for those that include "javascript"
  const { slug } = params as { slug: string };
  // getting  the posts that have said tag... getAllPosts() gets all the posts,
  // we filter it on the meta tags, on a specific slug via includes.
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  //Return an object {}, w/ a props {}
  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

// Returns an {} of paths.. fallback is false as we dont want anything
// dynamically done, 404 is fine.
export const getStaticPaths: GetStaticPaths = async () => {
  // Get all posts... this fn() is in the api.tsx file
  const posts = getAllPosts();
  // From the posts we can get the tags via post.meta.tags.
  // why flat() fn()?  because this returns an array of arrays --
  // [[],[],[]] -- but we just want a single flattened array.
  // Why "Set" : This is to remove duplicates.
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  // Then we have a Set obj, and we need to convert it to paths array.
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
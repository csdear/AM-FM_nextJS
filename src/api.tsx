import path from "path";
import fs  from "fs";
import { sync } from "glob";
import matter from "gray-matter";

// To work on windows machine I had to replace globally the backslashes with forward slashes
const POSTS_PATH = path.join(process.cwd(), "posts").replace(/\\/g, "/");
console.log(POSTS_PATH);

export const getSlugs = ():  string[] => {
    
    const paths = sync(`${POSTS_PATH}/*.mdx`);
    
    // on win, posts_path comes in like C:\Users\csdear\Documents\GitHub\AM-FM_nextJS\posts
    // only fwd slash paths will work const paths = sync('C:/Users/csdear/Documents/GitHub/AM-FM_nextJS/posts/*.mdx');
    console.log(POSTS_PATH);
    console.log('GLOBS FOUND', paths);
    
    return paths.map((path) => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split(".");
        return slug;
    })
}

export const getAllPosts = () => {
    const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
        if (a.meta.date > b.meta.date) return 1;
        if (a.meta.date < b.meta.date) return -1;
        return 0;
    })
    .reverse();
return posts;
}   

interface Post {
    content: string;
    meta: PostMeta;
}

export interface PostMeta {
    excerpt: string;
    slug: string;
    title: string;
    tags: string[];
    date: string;
}

export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
    console.log('postPath:', postPath);
    const source = fs.readFileSync(postPath);
    console.log('source', source); // a buffer that represents the content.
    const { content, data } = matter(source);
    
    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? "",
            title: data.title ?? slug,
            tags: (data.tags ?? [].sort()),
            date: (data.date ?? new Date()).toString(),
        },
    };  
};
import path from "path";
import fs  from "fs";
import { sync } from "glob";
import matter from "gray-matter"

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = ():  string[] => {
    
    const paths =  sync(`${POSTS_PATH}/*.mdx`);
    console.log('GLOBS FOUND', paths);
    
    return paths.map((path) => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split(".");
        return slug;
    })
}

export const getAllPosts = () => {
    getSlugs();
}
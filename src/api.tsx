import path from "path";
import fs  from "fs";
import { sync } from "glob";
import matter from "gray-matter"

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = ():  string[] => {
    console.log('====I AM CALLED === ');
    const paths =  sync(`${POSTS_PATH}/*.mdx`);
    console.log('GLOB FOUND', paths);
    return [];
}

export const getAllPosts = () => {
    getSlugs();
}
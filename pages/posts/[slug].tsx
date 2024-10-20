import Layout from '../../src/components/layout'

import Head from 'next/head'
import Date from '../../src/components/date'
import utilStyles from '../../styles/utils.module.scss'
import { getPostFromSlug, getSlugs, PostMeta } from "@/src/api";
import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug"; // for h1,h2,h3 etc attaches a slug as an id (34:50)
import rehypeAutolinkHeadings from "rehype-autolink-headings"; //wrap a link around  the  headings. Centers viewport on the heading, and helps when linking to this  page  to take user right to the specific section.
import rehypeHighlight from "rehype-highlight";
// to be injected  into MDX
import YouTube from "@/src/components/youTube"
import Image from "next/image";
import "highlight.js/styles/atom-one-dark.css";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

// import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// const CodeBlock = ({ language, value }) => {
//   return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
// };

//DEP
// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id) //change to slug
//   return {
//     props: {
//       postData
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  // pass `content` to serialize, lib mdxsource receives content
  // and knows what to do with it... make it html.
  // we also pass in some options when we serialize our md content as
  // mdxOptions, with rehypePlugiuns to add syntax highlighting
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

// Build an array [] of paths that has slug like ['ssg-ssr']
// Return a object `paths`, and fallback false which
// means dont try to generate dynamically, all the static
// pages that should exist, exist.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

// DEP
// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

//Post compontne receiving prop for postData.
//DEP
// export default function Post({ postData }) {
// a 'post' is source and meta.
export default function Post({ post }: {post: MDXPost}) {
  console.log('GROUND ZERO: page postData var:', post);
    return (
      <Layout home={false}>
        <Head>
          <title>{post.meta.title}</title>
        </Head>

        <article>
          <h1 className={utilStyles.headingXl}>{post.meta.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={post.meta.date} />
          </div>
          {/* DEP */}
          {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
          {/* // MDXRemote wants to receive the SOURCE. We spread it in via post.source
          we also pass in a components object, the components we want to inject within
          our mdx file, such as YouTube. */}
          <MDXRemote {...post.source} components={{YouTube, Image}}/>
        </article>

      </Layout>
    )
  }
//  pages/index.tsx : where we show a  list of  all of our articles.

import Head from 'next/head'
import Layout, { siteTitle } from '../src/components/layout'
import Alert from '../src/components/alert'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../src/components/date'
import styles from '../styles/Home.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
//  import { getSortedPostsData } from '../lib/posts'
import { getAllPosts, PostMeta } from "@/src/api"

// I dont think this is needed...
// i am not outting my post titles in a stanadlone
// component such as Card.tsx.  But I could if
// I want more control. SEE 'Index page' and '
// Card.tsx in the example. It is very clean.  but not sure
// the work involved.
// interface ArticleProps {
//   article: ArticleMeta;
// }


//1. get static props -- the O.G.
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export async function getStaticProps() {
  // not too many for now, lets just do 9 posts per page fornow. 
  const posts = getAllPosts().slice(0, 9);
  console.log('nuPosts :', posts);
  return { props:  {}}
}

// 2. render the posts on home. from frontmatter, I am using id, date and title.
// later I could create frontmatter 'description' for the posts like in jfelix.
export default function Home<ArticleProps>({ allPostsData, article }) {
  console.log(`allPostsData ${JSON.stringify(allPostsData, null, 4)}`)
  const [isActive, setActive] = useState(false);
  const buttonClasses = cn({
        "btn": true,
        "btn__active": isActive,
        [styles.btn__active]: isActive,
})
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello, I am Stuart Dear, Full Stack Software Engineer</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* getStaticProps::blog */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date}></Date>
                </small>
              </li>
            ))}
          </ul>
        </section>

      {/* <section>
      <div className={styles.grid}>
        <Link href="/posts/first-post-deprecated">
        <a className={styles.card}>
        <h2>My First Post &rarr;</h2>
          <p>This ia link to my first post</p>
        </a>
        </Link>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </section> */}
    {/* <Alert type='error'>
      <h2>Please try again</h2>
      <p>An error has occured</p>
    </Alert> */}
    {/* <button className={buttonClasses} onClick={() => setActive(!isActive)}>Make me active</button> */}

    </Layout>
  )
}
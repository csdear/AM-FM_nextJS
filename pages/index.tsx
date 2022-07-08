import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Alert from '../components/alert'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/Home.module.css'
import cn from 'classnames'
import React, { useState } from 'react'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
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
      <section>
      {/* For Keeps... I like the look of the grid. should componentize it though -- csd */}
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
      </section>
    <Alert type='error'>
      <h2>Please try again</h2>
      <p>An error has occured</p>
    </Alert>

    <button className={buttonClasses} onClick={() => setActive(!isActive)}>Make me active</button>

    </Layout>
  )
}
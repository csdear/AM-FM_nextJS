import React, { FC, ReactNode} from 'react';
import styles from './layout.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.scss'
import Link from 'next/link'
import Header from '../header';

const name = 'Stuart Dear'
export const siteTitle = '|Next.js Sample Website|'

interface LayoutProps {
  children: ReactNode,
  home: boolean
}

const Layout: FC<LayoutProps> = ({ children, home }) => {
  console.log('home?', home)
  return (
    <div className={styles["layout"]}>
    <Header />
    <div className={styles["layout__container"]}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/** What header to render is determined by `home` ternary */}
      <header className={styles["layout__header"]}>
        {home ? (
          <>
            <Image
              priority
              src="/images/githubProfile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}> {/*BIG NAME*/}
              {name}
              <br />
              <section className={utilStyles.subHeading}>
                <code>tech hedge wizardry from the trenches.</code>

              </section>
              </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/githubProfile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles["layout__backToHome"]}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
    </div>
  )
}

export default Layout;
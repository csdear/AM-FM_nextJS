import React, { FC, ReactNode} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../header';
import Box from '@/src/components/box';
import Search from '@/src/components/search'
import Footer from '@/src/components/footer';

import styles from './layout.module.scss'
// import utilStyles from '../../../styles/utils.module.scss'

const name = 'Stuart Dear'
export const siteTitle = '|Next.js Sample Website|'

interface LayoutProps {
  children: ReactNode,
  home: boolean
}

// This "Layout" component bares the most responsibility for the HomePage layout AND THE POST itself
// It is determined by a ternary.

const Layout: FC<LayoutProps> = ({ children, home }) => {

  const [charCol, setCharCol] = React.useState('red');

  return (
    <div className={styles["layout"]}>
      <Header />
    <div className={styles["layout__container"]}>
    {/* NextJS HEAD = metadata */}
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

      {/** Header rendered determined by `home` prop ternary. Renders home or post variant */}
        {home ? (
          <>

          {/* MY INFO BOX
          devAide: style={{ border: "1px dashed white" }} */}
            <Box style={{ width: '500px', height: '450px', margin: '2rem 3rem 0 3rem'}}>
              <div className={styles["layout__contentIntro"]}>
                <Image
                  priority
                  src="/images/amfm2.jpg"
                  // className={styles["layout__contentIntroImage"]}
                  height={444}
                  width={500}
                  alt={name}
                />

                {/* <h1 className={styles["layout__heading2Xl"]}>
                  AM|FM
                </h1> */}

                <div className={styles["layout__subHeading"]}>
                  {/* tech hedge wizardry */}
                  {/* Severe Web Development +
                  Nostal-tech + Tech Hedge Wizardry +
                  Assorted Nerdity. */}
                </div>

                <div>
                    {/* <div>-------------------------------------------------</div>
                    + Yo im Stuart Dear. +
                    I work in Software development +
                    Everything under the JS sun and more + <br />
                    Most of the time figuring out what went wrong +<br />
                    Sometimes Carbon fiber, sometimes bondo.
                    + Peacocks on Powerlines. +
                    <div>-------------------------------------------------</div>
                    <Image
                      priority
                      src="/images/blah.png"
                      className={styles["layout__contentIntroImage"]}
                      height={300}
                      width={300}
                      alt={name}
                    /> */}

                </div>
                </div>
            </Box>


          {/* BLOG ENTRIES LIST */}
          {/* SEARCHBOX COMPONENT */}

            <div className={styles["layout__main"]}>
              <Box style={{ width: '100%', marginRight: '3rem', marginTop: '1rem'}}>
              <Search />
              <div className={styles["layout__contentBlogItems"]}>
                <div>{children}</div>
              </div>
              </Box>
            </div>

            <div className={styles["layout__rightSidebar"]}>Right Sidebar</div>

            {/* BLOG FOOTER*/}
            <div className={styles["layout__footer"]}>
              <Box style={{ width: '100%', marginRight: '3rem', backgroundColor: 'rgb(28, 31, 35)', marginTop: '1rem'}}>
                <Footer />
              </Box>
            </div>

          </>
        ) : (
          <>
          <div className={styles["layout__postContent"]}>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/githubProfile.jpg"
                  className={styles["layout__borderCircle"]}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={styles["layout__headingLg"]}>
              <Link href="/">
                <a className={styles["layout__colorInherit"]}>{name}</a>
              </Link>
            </h2>
            <main>{children}</main>

            </div>
          </>
        )}
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
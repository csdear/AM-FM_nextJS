import React, { FC, ReactNode} from 'react';
import styles from './layout.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.scss'
import Link from 'next/link'
import Header from '../header';
import Box from '@/src/components/box';
import Grid from '@/src/components/grid';
import Search from '@/src/components/search'

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

      {/* GRID starts here with the folloing div container
          dev aide : style={{ margin: "16px", position: "relative", height: "100vh", background: "darkGreen" }}
      */}
      <div className="container">
          <br/>

          {/*WRAPPING GRID*/}
          <Grid
          container // container: remove for full width, vertical Y-AXIS stack of pancakes
          spacing="sm"  // spacing: xs, sm, md, or lg.
          alignItems="flex-start" // alignItems : "flex-start" | "center" | "flex-end"; Alignment of grid items Top, Middle or Bottom.
          justifyContent="flex-start" // justifyContent : "flex-start" | "center" | "flex-end" | "space-between";
          // style attribute here only used as a dev Aide.  Default height of 75% and background color lightGreen
          // so you can see the bounds of the WRAPPING Grid. OR add --
          // style={{ height: "100%", width:"100%", background: "lightGreen" }}
        >
          {/*Grid *ITEM* xs, sm, md and lg controls how much horizontal width THIS grid item and box combination will take up, out of a  maximum of 12 columns.
            the number is how many columns to take up. Subsequent Grid  items will wrap to the next line if they  run out of room.
            'lg' is the most common, but resize the viewport to see how the grid itrem re-draws itself in xs, sm, md dimensions.
            lg={3} : 3/12 columns
            lg={6} : 6/12 columns. Grid item takes up half the screen.
            lg={12} : 12/12, full width.
          */}

          {/* MY INFO BOX 
          devAide: style={{ border: "1px dashed white" }} */}
          <Grid item lg={4} style={{ border: "1px dashed white" }}>
            {/* box1 */}
            <Box >
              <div className={utilStyles.contentIntro}>
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
                  tech hedge wizardry
                </section>
              </h1>
              <section>
                <div>-------------------------------------------------</div>
                Hey! I'm Stuart Dear.
            I work in Software development <br />
            Everything under the JS sun <br />
            Most of the Time figuring out what went wrong<br />
            Sometimes Carbon fiber, sometimes bondo.
              

                </section>
            </div>
            </Box>
          </Grid>
          {/* devAide bluebackground style={{ background: "Blue" }}
          style={{ border: "1px dashed white" }}
          */}
          <Grid item lg={8}>
          <Search />
            <Box>
            <div className={utilStyles.contentBlogItems}>
            <main>{children}</main>
            </div>
            </Box>
          </Grid>
        </Grid>
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
            <main>{children}</main>
            </div>
          </>
        )}
      </header>
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
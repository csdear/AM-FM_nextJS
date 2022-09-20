import { FC, useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"

import styles from "./header.module.scss";

// using next/router to PUSH CTA button.
import { useRouter } from 'next/router'
import Image from "next/image";

// nextjs Link?
// import error: 'useHistory' is not exported from 'react-router-dom'
// update, re react-router-dom v6 useHistory() is replaced by useNavigate()
// useNavigate problematic as well. try next/link
//// import { Link, useNavigate } from "react-router-dom";
import Link from 'next/link'


const Header: FC = () => {
    // const history = useNavigate();
    // const navigate = useNavigate();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        // Property 'push' does not exist on type 'History'.ts(2339)
        // REF : https://stackoverflow.com/questions/71915009/property-push-does-not-exist-on-type-navigatefunction-typescript
        // history.push("/page-cta");
        // navigate("/page-cta");
        <Link href="/page-cta"></Link>
        router.push({ pathname: "/page-cta" });
    };

return (
    <header className={styles["header"]}>
        <div className={styles["header__content"]}>
            <Link href="/">
                <a className={styles["header__content__logo"]}>
                    {'sd'}
                    <Image
                        priority
                        src="/images/atom_x2.png"
                        // className={styles["header__content__logo"]}
                        height={50}
                        width={50}
                        alt={'atom'}
                        />
                </a>
            </Link>

        {/* apply header__content__nav and optional second class. If the menu is
        open and the size.width is less than 768 apply .isMenu, else, no secondary class */}
        <nav
            className={`${styles["header__content__nav"]} ${
                menuOpen && size.width < 768 ? styles["isMenu"] : ""
            }`}
        >
            <ul>
                <li>
                    <Link href="/about">
                        <a onClick={menuToggleHandler}>
                            About
                        </a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/projects">
                        <a onClick={menuToggleHandler}>
                            Projects
                        </a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/contact">
                        <a onClick={menuToggleHandler}>
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
            {/* <button onClick={ctaClickHandler}>CTA Page</button> */}
        </nav>
        <div className={styles["header__content__toggle"]}>
            {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
                <AiOutlineClose onClick={menuToggleHandler} />
            )}
        </div>
        </div>
    </header>
);
};

export default Header;
import { FC, useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"

import styles from "./header.module.scss";

// nextjs Link?
// import error: 'useHistory' is not exported from 'react-router-dom'
// update, re react-router-dom v6 useHistory() is replaced by useNavigate()
import { Link, useNavigate } from "react-router-dom";



const Header: FC = () => {
    // const history = useNavigate();
    const navigate = useNavigate();
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
        navigate("/page-cta");
    };

return (
    <header className={styles["header"]}>
        <div className={styles["header__content"]}>
            <Link to="/" className={styles["header__content__logo"]}>
                navbar
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
                    <Link to="/about" onClick={menuToggleHandler}>
                                About
                    </Link>
                </li> 
                <li>
                    <Link to="/projects" onClick={menuToggleHandler}>
                                projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={menuToggleHandler}>
                                contact
                    </Link>
                </li>
            </ul>
            <button onClick={ctaClickHandler}>CTA Page</button>
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
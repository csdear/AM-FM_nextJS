import { FC } from "react";
import styles from "./header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"

const Header: FC = () => {

return (
    <header className={styles["header"]}>
        <div className={styles["header__content"]}>
            <h2 className={styles["header__content__logo"]}>navbar</h2>
        <nav className={styles["header__content__nav "]}>
            <ul>
                <li>
                    <a href="/">PageOne</a>
                </li> 
                <li>
                    <a href="/">PageTwo</a>
                </li>
                <li>
                    <a href="/">PageThree</a>
                </li>
            </ul>
            <button>CTA Page </button>
        </nav>
        <div className={styles["header__content__toggle"]}>
            <BiMenuAltRight />
        </div>
        </div>
    </header>
);
};

export default Header;
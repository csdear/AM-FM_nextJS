import React, { FC, ReactNode  } from "react";
import styles from "./box.module.scss";

interface BoxProps {
    children: ReactNode;
}

const Box: FC<BoxProps> = ({ children }) => {

return (
    <div className={styles["box"]}>
        {children}
    </div>
);
};

export default Box;
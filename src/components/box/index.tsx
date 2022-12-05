import React, { FC, ReactNode  } from "react";
import styles from "./box.module.scss";

interface BoxProps {
    children: ReactNode;
    style?: React.CSSProperties;
}

const Box: FC<BoxProps> = ({ children, style }) => {

return (
    <div className={styles["box"]} style={style}>
        {children}
    </div>
);
};

export default Box;
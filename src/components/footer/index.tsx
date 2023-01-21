
import { FC } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
return (
<>
<div className={styles.separator}>
    {/* <!-- Text --> */}
    <div className={styles.separator__content}>AMFM, a blog by Stuart Dear
        <div>copyright</div>
        <div>Another div</div>
    </div>

    {/* <!-- Separator line --> */}
    <div className={styles.separator__separator}></div>
</div>
</>
)
}

export default Footer;
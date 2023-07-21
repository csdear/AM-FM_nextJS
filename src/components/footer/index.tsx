
import { FC } from "react";
import styles from "./footer.module.scss";
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../../../styles/utils.module.scss'

const Footer: FC = () => {
return (
<>
<div className={styles["separator"]}>
    {/* <!-- Text --> */}
    {/* <div className={styles["separator__social-media"]}>

    </div>     */}
    <div className={styles.separator__media}>
        <Link href="https://www.linkedin.com/in/csdear/">
            <Image
                priority
                src="/images/githubProfile.jpg"
                className={utilStyles.borderCircle}
                height={75}
                width={70}
                alt={"profile image"}

            />
        </Link>
    </div>
        <div className={styles.separator__content}>
                <p>AM|FM : a blog by Stuart Dear</p>
                Copyright 2023
                All Opinions are my own
                And I can be paid in burritos
        </div>


    {/* <!-- Separator line, not needed here but perhaps elsewhere. see scss also. --> */}
    {/* <div className={styles["separator__separator"]}>

    </div> */}
</div>
</>
)
}

export default Footer;
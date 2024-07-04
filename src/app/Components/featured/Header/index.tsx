import Image from "next/image";
import BoldTitle28 from "../../shared/BoldTitle28";
import styles from "./styles.module.scss"
import BoldTitle24 from "../../shared/BoldTitle24";
import Grey20 from "../../shared/Grey20";
import Button from "../../shared/Button";

const Header = () => {

    return <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.navBar}>
                <BoldTitle28>Home</BoldTitle28>
                <BoldTitle28>Tickets</BoldTitle28>
            </div>
            <div className={styles.userInfo}>
                <Image src={"icons/person.svg"} width={66} height={66} alt="person" className={styles.userIcon} />
                <div className={styles.info}>
                    <div className={styles.topBlock}>
                        <BoldTitle24 color="black">James Smith</BoldTitle24>
                        <Button type="green">Enabled</Button>
                    </div>
                    <Grey20>jamessmith@mail.com</Grey20>
                </div>
            </div>
        </div>
    </div>
}

export default Header;
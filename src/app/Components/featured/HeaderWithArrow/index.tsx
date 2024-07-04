"use client"
import { useState } from "react";
import Image from "next/image";
import BoldTitle28 from "../../shared/BoldTitle28";
import styles from "./styles.module.scss"

const HeaderWithArrow = ({ tabChange, title, children }: { tabChange?: (value: boolean) => void, title: string, children?: JSX.Element | string }) => {
    const [handle, setHandle] = useState(true);

    const handleEvent = (value: boolean) => {
        setHandle(value)
        if (tabChange) {
            tabChange(value)
        }
    }

    return <div className={styles.header}>
        <BoldTitle28>
            {title}
        </BoldTitle28>
        {children && <div className={styles.children}>
            {children}
        </div>}
        <Image
            src={"icons/arrow.svg"}
            width={32}
            height={32}
            alt="arrow"
            className={`${styles.arrowIcon} ${handle ? styles.closeIcon : styles.openIcon}`}
            onClick={() => handleEvent(!handle)}
        />
    </div>
}

export default HeaderWithArrow;
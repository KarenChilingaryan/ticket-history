

import styles from "./styles.module.scss"

const Grey20 = ({ children }: { children: JSX.Element | string }) => {

    return <p className={styles.greyText}>
        {children}
    </p>
}

export default Grey20;
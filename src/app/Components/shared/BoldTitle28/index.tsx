

import styles from "./styles.module.scss"

const BoldTitle28 = ({ children }: { children: JSX.Element | string }) => {

    return <p className={styles.boldTitle}> 
        {children}
    </p>
}

export default BoldTitle28;
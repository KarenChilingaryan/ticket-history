

import styles from "./styles.module.scss"

const BoldTitle24 = ({ weight = '500', color, children }: { weight?: string, color?: string, children: JSX.Element | string }) => {

    return <p className={`${styles.boldTitle} W${weight} ${color ? styles[color] : ''}`} >
        {children}
    </p>
}

export default BoldTitle24;
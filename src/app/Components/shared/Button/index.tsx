

import { HTMLAttributes } from "react";
import styles from "./styles.module.scss"

const Button = ({ type, children, rest }: { type: string, children: JSX.Element | string, rest?: JSX.ElementAttributesProperty }) => {

    return <button className={`${styles.buttonElement} ${styles[type]}`} {...rest}>
        {children}
    </button>
}

export default Button;
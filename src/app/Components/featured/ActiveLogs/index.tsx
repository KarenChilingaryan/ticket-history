
import Button from "../../shared/Button";
import HeaderWithArrow from "../HeaderWithArrow";
import styles from "./styles.module.scss"

const ActiveLogs = () => {


    return <div className={styles.container}>
        <HeaderWithArrow title="Activity Log">
            <>
                <Button type="orange">VPN</Button>
                <Button type="red">Restricted</Button>
            </>
        </HeaderWithArrow>
    </div>
}

export default ActiveLogs;
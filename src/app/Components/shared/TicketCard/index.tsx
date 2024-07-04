

import { TicketCardProps } from "@/urils/interfaces/ticketCard";
import styles from "./styles.module.scss"
import Button from "../Button";
import BoldTitle24 from "../BoldTitle24";
import Link from "next/link";
import moment from "moment";
import { useMemo } from "react";
import Image from "next/image";

const TicketCard = ({ title, description, date, view, url }: TicketCardProps) => {


    const dateWithParts = useMemo(() => {
        if (date) {
            const newDate = moment(date);
            const formattedDate = newDate.format('DD MMM');
            const formattedTime = newDate.format('hh:mm A');
            return {
                formattedDate,
                formattedTime
            }
        }
        return null
    }, [date])

    return <div className={styles.card}>
        <div className={styles.topContent}>
            <div className={styles.header}>
                <BoldTitle24 weight="700">
                    {title}
                </BoldTitle24>
                <div className={styles.time}>
                    {dateWithParts &&
                        <>
                            <BoldTitle24 weight="400">{dateWithParts.formattedDate}</BoldTitle24>
                            <Image src={"icons/dot.svg"} width={4} height={4} alt="dot" />
                            <BoldTitle24 weight="400">{dateWithParts.formattedTime}</BoldTitle24>
                            <Image src={"icons/dot.svg"} width={4} height={4} alt="dot" />
                            <BoldTitle24 weight="700" color={view}>{view}</BoldTitle24>
                        </>
                    }
                </div>
            </div>
            <Link href={url}>
                <Button type="blue">View Ticket</Button>
            </Link>
        </div>
        <hr />
        <div className={styles.bottomContainer}>
            <BoldTitle24 weight="400">{description}</BoldTitle24>
        </div>
    </div>
}

export default TicketCard;
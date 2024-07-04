"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import BoldTitle28 from "../../shared/BoldTitle28";
import styles from "./styles.module.scss"
import axios from "axios";
import TicketCard from "../../shared/TicketCard";
import HeaderWithArrow from "../HeaderWithArrow";

const TicketHistory = () => {
    const [usersData, setUsersData] = useState([]);
    const [closeTickets, setCloseTickets] = useState(true);

    const getAllTickets = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/tickets');
            setUsersData(data)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllTickets();
    }, [])

    return <div className={styles.container}>
        <HeaderWithArrow title="Ticket history" tabChange={setCloseTickets} />
        <div className={`${styles.tickets} ${closeTickets ? styles.closed : styles.opened}`}>
            {usersData && usersData.map((user: any) => {
                return user.conversations.map((conversion: any) => {
                    return conversion.messages.map((message: any) =>
                        <TicketCard description={message.message} date={message.timestamp} view={conversion.status} title={conversion.title} url={conversion.conversationId} />)
                })
            })}
        </div>
    </div>
}

export default TicketHistory;
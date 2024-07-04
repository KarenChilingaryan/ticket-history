import ActiveLogs from "./Components/featured/ActiveLogs";
import Header from "./Components/featured/Header";
import TicketHistory from "./Components/featured/TicketHistory";

export default function Home() {
  return (
    <div>
      <Header />
      <TicketHistory />
      <ActiveLogs />
    </div>
  );
}

import EventsPane from "./subs/eventsPane";
import EventFilter from "./subs/filter";
import Ticketing from "./subs/ticketSidebar";

export default function Events() {
  return (
    <div className="w-full h-[100%] h-max row-content-between border border-[var(--light)] sm:xs:col-all-start">
      <EventFilter />
      <EventsPane />
      <Ticketing />
    </div>
  );
}

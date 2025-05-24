import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid/index.js";
import type { RefObject } from "react";

function Calendar({
  calendarRef,
}: {
  calendarRef: RefObject<FullCalendar | null>;
}) {
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        height="100%" // importante
      />
    </div>
  );
}

export default Calendar;

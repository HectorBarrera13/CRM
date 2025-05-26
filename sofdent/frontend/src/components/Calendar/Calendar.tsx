import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid/index.js";
import type { RefObject } from "react";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({
  calendarRef,
}: {
  calendarRef: RefObject<FullCalendar | null>;
}) {
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        height="100%" // importante
        droppable={true}
        editable={true}
        eventClick={(info) => {
          alert("Event: " + info.event.title);
          alert(
            "Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY
          );
          alert("View: " + info.view.type);
          info.el.style.borderColor = "red";
        }}
      />
    </div>
  );
}

export default Calendar;

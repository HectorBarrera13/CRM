import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid/index.js";
import type { RefObject } from "react";
import interactionPlugin from "@fullcalendar/interaction";

import { useCalendarEventDrop } from "./useCalendarEventDrop"; // ✅ Importamos el hook para manejar el evento de arrastre

function Calendar({
  calendarRef,
}: {
  calendarRef: RefObject<FullCalendar | null>;
}) {
  const { handleEventDrop } = useCalendarEventDrop(); // ✅ Hook llamado correctamente

  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <FullCalendar
        eventSources={[
          {
            url: "http://localhost:3000/api/appointment/",
            method: "GET",
            failure: function () {
              alert("there was an error while fetching events!");
            },
          },
        ]}
        ref={calendarRef}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        height="100%"
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
        eventDrop={handleEventDrop} // ✅ Usamos la función ya creada
      />
    </div>
  );
}

export default Calendar;

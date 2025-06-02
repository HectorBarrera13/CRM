// useCalendarActions.ts
export const useCalendarEventDrop = () => {
  const handleEventDrop = async (info: any) => {
    const idAppointment = info.event.id;
    const start = info.event.start;
    const end = info.event.end;

    try {
      const res = await fetch(
        `http://localhost:3000/api/appointment/updateTime/${idAppointment}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idAppointment,
            start,
            end,
          }),
        }
      );
      console.log(start);
      if (!res.ok) throw new Error("Error al actualizar evento");
      alert("Evento actualizado correctamente");
    } catch (err) {
      console.error("Error:", err);
      alert("Fallo al actualizar el evento");
      info.revert(); // vuelve el evento a su estado original
    }
  };

  return { handleEventDrop };
};

import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/tu_basedatos")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error al conectar Mongo:", err));

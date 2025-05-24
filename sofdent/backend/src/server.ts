// src/server.ts
import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // 👈 importar mongoose
import { patientRouter } from "./Interfaces/Rest/PatientRouter";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", patientRouter); // REST endpoint

// ✅ Conectar a MongoDB y luego iniciar el servidor
mongoose
  .connect("mongodb://localhost:27017/tu_basedatos")
  .then(() => {
    console.log("✅ Conectado a MongoDB");

    app.listen(3000, () => {
      console.log("🚀 Backend corriendo en http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err);
  });

import express from "express";
import cors from "cors";
import { patientRouter } from "./Interfaces/Rest/PatientRouter";
import { doctorRouter } from "./Interfaces/Rest/DoctorRouter";
import { appointmentRouter } from "./Interfaces/Rest/AppointmentRouter";

import { connectDB } from "./db";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/patient", patientRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointmentRouter);

connectDB()
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(3000, () => {
      console.log("🚀 Backend corriendo en http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err);
  });

import express from "express";
import whatsappRoutes from "./routes/WhatsAppRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/whatsapp", whatsappRoutes);

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

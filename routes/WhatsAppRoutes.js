import express from "express";
import {
  startSession,
  sendMessage,
  endSession,
} from "../controller/WhatsappController.js";

const router = express.Router();

// Endpoint untuk memulai session dan mendapatkan QR Code
router.get("/start", startSession);

// Endpoint untuk mengirim pesan ke kontak tertentu
router.post("/send-message", sendMessage);

// Endpoint untuk mengakhiri session
router.get("/end", endSession);

export default router;

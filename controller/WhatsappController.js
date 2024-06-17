import wbm from "wbm";

// Fungsi untuk memulai session dan mendapatkan QR Code
export const startSession = async (req, res) => {
  try {
    const qrCodeData = await wbm.start({
      showBrowser: true,
      qrCodeData: true,
      session: false,
    });
    console.log("QR Code Data:", qrCodeData);
    await wbm.waitQRCode();
    res.json({ success: true, qrCodeData });
  } catch (error) {
    console.error("Error starting session:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to start session" });
  }
};

// Fungsi untuk mengirim pesan ke kontak tertentu
export const sendMessage = async (req, res) => {
  const contacts = [
    { phone: "5535988841854", name: "Bruno", group: "friend" },
    { phone: "5535988841854", name: "Will", group: "customer" },
  ];

  try {
    for (const contact of contacts) {
      let message = "hi";
      if (contact.group === "customer") {
        message = "Good morning " + contact.name;
      } else if (contact.group === "friend") {
        message = "Hey " + contact.name + ". Wassup?";
      }
      await wbm.sendTo(contact.phone, message);
      console.log(`Message sent to ${contact.name}`);
    }
    res.json({ success: true, message: "Messages sent successfully" });
  } catch (error) {
    console.error("Error sending messages:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send messages" });
  }
};

// Fungsi untuk mengakhiri session
export const endSession = async (req, res) => {
  try {
    await wbm.end();
    res.json({ success: true, message: "Session ended successfully" });
  } catch (error) {
    console.error("Error ending session:", error);
    res.status(500).json({ success: false, message: "Failed to end session" });
  }
};

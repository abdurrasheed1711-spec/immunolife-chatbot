const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Simple chatbot endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";

  let botReply = "I’m not sure about that. Can you ask about our products or services?";

  if (userMessage.toLowerCase().includes("supplement")) {
    botReply = "We offer immune-boosting supplements that support health and wellness.";
  } else if (userMessage.toLowerCase().includes("contact")) {
    botReply = "You can reach ImmunoLife via the contact form on our website.";
  } else if (userMessage.toLowerCase().includes("hello")) {
    botReply = "Hello! I’m the ImmunoLife chatbot. How can I assist you today?";
  }

  res.json({ reply: botReply });
});

// Default homepage
app.get("/", (req, res) => {
  res.send("✅ ImmunoLife Chatbot is running!");
});

// Railway will set the PORT automatically
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Chatbot running on port ${PORT}`);
});

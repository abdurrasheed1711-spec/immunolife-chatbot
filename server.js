const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Serve index.html at the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Chat endpoint
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

// Serve static files if needed
app.use(express.static(path.join(__dirname, "public")));

// Use the port from Render or fallback to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Chatbot running on port ${PORT}`);
});

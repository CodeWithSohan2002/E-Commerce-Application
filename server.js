const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  let userMessage = req.body.message;

  if (!userMessage) {
    return res.json({ reply: "Message receive nahi zala ❌" });
  }

  userMessage = userMessage.toLowerCase().trim();

  let botReply = "Sorry 😅 मला समजले नाही. Please try again.";

  // 👉 Greeting
  if (
    userMessage.includes("hello") ||
    userMessage.includes("hi") ||
    userMessage.includes("hey") ||
    userMessage.includes("namaskar") ||
    userMessage.includes("नमस्कार")
  ) {
    botReply = "नमस्कार! Hello 😄 मी Sohan's Chatbot आहे 🤖";
  }

  // 👉 Who are you
  else if (
    userMessage.includes("who are you") ||
    userMessage.includes("what are you") ||
    userMessage.includes("tu kon") ||
    userMessage.includes("tu kon ahes") ||
    userMessage.includes("तू कोण")
  ) {
    botReply = "मी Sohan's Chatbot आहे 🤖, Node.js वापरून बनवलेला 😊";
  }

  // 👉 Name
  else if (
    userMessage.includes("name") ||
    userMessage.includes("nav") ||
    userMessage.includes("नाव")
  ) {
    botReply = "माझं नाव Sohan's Chatbot आहे 🤖";
  }

  // 👉 Help
  else if (
    userMessage.includes("help") ||
    userMessage.includes("madat") ||
    userMessage.includes("मदत")
  ) {
    botReply =
      "तू मला hello, तू कोण आहेस, नाव, help, bye असे प्रश्न विचारू शकतो 👍";
  }

  // 👉 Bye
  else if (
    userMessage.includes("bye") ||
    userMessage.includes("goodbye") ||
    userMessage.includes("nighato") ||
    userMessage.includes("निघतो")
  ) {
    botReply = "ठीक आहे 👋 Bye! पुन्हा भेटू 😊";
  }

  res.json({ reply: botReply });
});

app.listen(3000, () => {
  console.log("Sohan's Chatbot running on http://localhost:3000");
});

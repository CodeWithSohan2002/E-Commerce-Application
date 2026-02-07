function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;
  
    if (message === "") return;
  
    addMessage("You", message);
  
    fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    })
    .then(res => res.json())
    .then(data => {
      addMessage("Bot", data.reply);
    });
  
    input.value = "";
  }
  
  function addMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
  }
  
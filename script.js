const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');

let messages = [];

function sendMessage() {
  const message = messageInput.value.trim(); // Agregué trim() para eliminar espacios en blanco
  if (message!== "") {
    addMessage("user", message);
    messageInput.value = "";
    setTimeout(() => {
      addMessage("bot", "Hola! 👋  ¿Cómo puedo ayudarte?");
    }, 1000); // Simula un tiempo de respuesta
  }
}

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', `${sender}-message`);
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
  messages.push({ sender, message });
}

// Inicializa el chat con un mensaje de bienvenida
addMessage("bot", "Bienvenido al chat! 👋");
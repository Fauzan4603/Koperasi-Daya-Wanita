<template>
    <div>
      <div class="chat-popup" :class="{ 'show': showChatPopup }">
        <div class="popup-header">
          <span class="popup-title">Chat CS</span>
          <button class="close-btn" @click="toggleChatPopup">x</button>
        </div>
        <div class="chat-container">
          <div v-if="!connect">
            <div class="modal-content">
              <form @submit.prevent="handleSubmit">
                <h3>Enter your name to start chatting</h3>
                <input type="text" v-model="username" placeholder="Enter your name" />
                <button type="submit">Connect</button>
              </form>
            </div>
          </div>
          <div v-if="connect" class="chat-window">
            <div class="messages-container">
              <div v-for="(val, index) in messages" :key="index" :class="[val.username === username ? 'left-bubble' : 'right-bubble']">
                <b>{{ val.username }}</b>: <em>{{ val.message }}</em>
              </div>
            </div>
            <div class="chat-input">
              <form @submit.prevent="sendMessage(username, text)">
                <input type="text" v-model="text" placeholder="Write message..." />
                <button type="submit"><i class="bi bi-send"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button @click="toggleChatPopup" class="chat" :class="{ 'hide': showChatPopup }">
        <img src="../assets/chat.svg" />
      </button>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  
  const showChatPopup = ref(false); 
  const connect = ref(false);
  const username = ref('');
  const text = ref('');
  const messages = ref([]);
  const socket = new WebSocket('https://ws.fmway.me');
  
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    messages.value = [...messages.value, message];
  };
  
  const toggleChatPopup = () => {
    showChatPopup.value = !showChatPopup.value;
  };
  
  const handleSubmit = () => {
    connect.value = true;
  };
  
  const sendMessage = (username, text) => {
    const messageData = { username: username, message: text };
    socket.send(JSON.stringify(messageData));
    messages.value = [...messages.value, messageData];
    text.value = ''; // Clear the input after sending
  };
</script>

<style scoped>
.chat {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 99999999999;
  transition: opacity 0.3s ease;
}
.chat img {
  height: 10vh;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}
.chat img:hover {
  height: calc(10vh + 10px);
  animation: popup 0.3s;
}

@keyframes popup {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

.chat-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  opacity: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease, opacity 0.3s ease; /* Animasi transisi */
}

.chat-popup.show {
  opacity: 1;
  transform: translateY(0); /* Show it when class 'show' is added */
}

.popup-header {
  background: #ff7d7d;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup-title {
  font-size: 16px;
}

.close-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.messages-container {
  flex: 1;
  padding: 0px;
  overflow-y: auto; /* Enable scrolling */
  max-height: 300px;
}

.left-bubble {
  background: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-end;
}

.right-bubble {
  background: #f1f1f1;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
}

.chat-input {
  padding: 10px;
  border-top: 1px solid #ccc;
  background: #fff;
}

.chat-input form {
  display: flex;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px 0 0 10px;
}

.chat-input button {
  background: #007bff;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
}

.hide {
  opacity: 0;
  pointer-events: none;
}
</style>

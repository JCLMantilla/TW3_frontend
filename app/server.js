const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Chat endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Simple bot responses based on keywords
  let response = '';
  
  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    response = 'Hello! How can I help you today?';
  } else if (message.toLowerCase().includes('how are you')) {
    response = 'I\'m doing great, thank you for asking! How about you?';
  } else if (message.toLowerCase().includes('bye') || message.toLowerCase().includes('goodbye')) {
    response = 'Goodbye! Have a great day!';
  } else if (message.toLowerCase().includes('help')) {
    response = 'I\'m here to help! You can ask me questions or just chat with me.';
  } else if (message.toLowerCase().includes('weather')) {
    response = 'I\'m sorry, I don\'t have access to weather information right now.';
  } else if (message.toLowerCase().includes('time')) {
    response = `The current time is ${new Date().toLocaleTimeString()}.`;
  } else if (message.toLowerCase().includes('name')) {
    response = 'My name is ChatBot! Nice to meet you.';
  } else {
    response = 'That\'s interesting! Tell me more about that.';
  }

  // Simulate some processing time
  setTimeout(() => {
    res.json({ response });
  }, 500 + Math.random() * 1000); // Random delay between 500ms and 1500ms
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Chat API available at http://localhost:${PORT}/api/chat`);
}); 
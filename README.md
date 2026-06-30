# Bob - Simple AI Chatbot Application

A simple full-stack chatbot application inspired by IBM's Bob. Users can have conversations with an AI chatbot through a clean web interface.

## Features
- Real-time chatbot conversations
- Message history stored in database
- Simple and intuitive UI
- RESTful API backend
- Lightweight and fast (no external AI API needed)

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js + Express.js
- **Database**: SQLite (simple, no setup needed)

## Quick Start

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Start the Application
```bash
npm start
```

The server will start on `http://localhost:5000`

### 3. Open in Browser
Open your browser and go to: `http://localhost:5000`

## What's Included

- **Frontend**: Clean chat interface with real-time messaging
- **Backend**: REST API with keyword-based responses
- **Database**: SQLite for storing conversations
- **Responses**: Pre-defined keyword-based bot responses

## Project Structure
```
Ammar-dega/
├── frontend/              
│   ├── index.html        # Chat interface
│   ├── style.css         # Styling
│   └── script.js         # Frontend logic
├── backend/              
│   ├── server.js         # Express server
│   ├── database.js       # SQLite setup
│   ├── package.json
│   ├── routes/
│   │   └── chat.js
│   ├── controllers/
│   │   └── chatController.js
│   └── models/
│       └── responses.js
├── database/
│   └── chat.db           # Created automatically
└── README.md
```

## API Endpoints

- **POST** `/api/chat` - Send message and get reply
- **GET** `/api/history` - Get all conversations
- **DELETE** `/api/history` - Clear conversation history
- **GET** `/health` - Server health check

## How It Works

1. Type a message in the frontend
2. Message is sent to the backend API
3. Backend matches keywords in the message
4. Bot generates a relevant reply
5. Conversation is saved to SQLite database
6. Response is displayed in the chat

## Customizing Bot Responses

Edit `backend/models/responses.js` to add or modify:
- Keywords that trigger responses
- Bot reply messages
- Add new response categories

## Next Steps

- Integrate with OpenAI API for real AI
- Add user authentication
- Deploy to Heroku or AWS
- Add multiple chat rooms
- Add typing indicators

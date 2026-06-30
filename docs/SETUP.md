# Setup Guide - Shoe Selling Application

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Ammar-dega.git
cd Ammar-dega
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shoe-store
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
```

Start backend:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm start
```

### 4. Using Docker (Optional)
```bash
docker-compose up
```

## Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/health

## Default Admin Credentials
- Email: admin@shoestorm.com
- Password: admin123

## Features Implementation Checklist
- [ ] Product Management
- [ ] User Authentication
- [ ] Shopping Cart
- [ ] Checkout Process
- [ ] Payment Integration
- [ ] Order Management
- [ ] Admin Dashboard
- [ ] User Reviews
- [ ] Wishlist Feature
- [ ] Email Notifications

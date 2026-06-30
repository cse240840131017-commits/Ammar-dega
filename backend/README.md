# Backend - Shoe Selling Application

Node.js/Express backend API for the shoe selling e-commerce platform.

## Setup

```bash
cd backend
npm install
npm start
```

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shoe-store
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Users
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (Admin)

### Payment
- `POST /api/payment/checkout` - Process payment

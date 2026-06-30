# Database Schemas

## Product Schema
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String (men, women, kids, sports),
  size: [Number],
  color: [String],
  stock: Number,
  rating: Number,
  reviews: [
    {
      user: String,
      comment: String,
      rating: Number,
      date: Date
    }
  ],
  createdAt: Date
}
```

## User Schema
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  isAdmin: Boolean,
  profileImage: String,
  createdAt: Date
}
```

## Order Schema
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  products: [
    {
      product: ObjectId (ref: Product),
      quantity: Number,
      price: Number
    }
  ],
  totalPrice: Number,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  paymentMethod: String,
  paymentStatus: String (pending, completed, failed),
  orderStatus: String (processing, shipped, delivered, cancelled),
  trackingNumber: String,
  createdAt: Date,
  updatedAt: Date
}
```

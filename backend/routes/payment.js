const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_demo');

// Process payment
router.post('/checkout', async (req, res) => {
  try {
    const { amount, currency = 'usd', source } = req.body;
    
    const charge = await stripe.charges.create({
      amount: Math.round(amount * 100),
      currency,
      source,
      description: 'Shoe Store Purchase'
    });
    
    res.json({ success: true, charge });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

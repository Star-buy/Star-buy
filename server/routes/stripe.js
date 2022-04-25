require("dotenv").config();
const router = require("express").Router();

// Setup Stripe

const stripe = require("stripe")(process.env.STRIPE_API_SECRET_KEY);

router.post("/pay", async (req, res) => {
  const { title, quantity,image, price } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'], 
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: title,
            images:[image]
          },
          unit_amount: price * 100,
        },
        quantity: quantity,
      },
    ],
    mode: "payment",
    success_url: 'http://localhost:5000',
    cancel_url: 'http://localhost:5000',
  })
  res.send(session.url)
});

module.exports = router;

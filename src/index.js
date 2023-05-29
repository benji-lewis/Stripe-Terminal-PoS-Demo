require('dotenv').config();
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const app = express();
app.use(cors());
var jsonParser = bodyParser.json();
app.use(jsonParser);


async function createPaymentIntent(value) {
	const paymentIntent = await stripe.paymentIntents.create({
		currency: 'gbp',
		payment_method_types: ['card_present'],
		capture_method: 'automatic',
		amount: value,
	});
	return paymentIntent;
};

app.post('/connection_token', async (req, res) => {
	const token = await stripe.terminal.connectionTokens.create();
	console.log(token);
	res.json({secret: token.secret});
  });

app.post('/create-payment-intent', async (req, res) => {
	var value = req.body.value;
	console.log(value);
	const intent = await createPaymentIntent(value);
	console.log(intent.client_secret);
	res.json({'client_secret': intent.client_secret});
});

app.listen(80, () => console.log('Running on port 80'));
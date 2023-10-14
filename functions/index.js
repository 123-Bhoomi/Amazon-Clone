// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51NwX98SHkaDCK4Bnj7AAFgAVz2IcoU8nhEmU96hjxA4mpugILoWMj8WdvEILCJVOhCbi3Invt15EP5N7Q31NGGgu00PHO2XHuM");

// API

 
//-App config
const app = express();


//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create',async(request, response) => {
    const total = request.query.total;

    console.log('Payment request received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//-Listen command
exports.api = functions.https.onRequest(app)
//export class stripeInvalidRequestError extends stripeError{}

//Example endpoint
//http://127.0.0.1:5001/clone-c5acf/us-central1/api
// http://127.0.0.1:5001/clone-c5acf/us-central1/api
// http://127.0.0.1:5001/clone-c5acf/us-central1/api

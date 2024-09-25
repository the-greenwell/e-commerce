const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const product_routes = require('./routes/productRoutes');
const user_routes = require('./routes/userRoutes');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', product_routes);
app.use('/user', user_routes);

mongoose.connect(process.env.MDBURI)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.error('DB connection error: ', err));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
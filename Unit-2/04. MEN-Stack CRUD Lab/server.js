// Require necesary dependancies
// set up for .env must be done before all else or connection wont be established
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const path = require("path");

// connect to database
mongoose.connect(process.env.MONGODB_URI);
//test connection to DB
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


// and assign express to a variable
const app = express();

// url encoder parses the data from the object being sent: I export an object 
// then break it down into its key value pairs
app.use(express.urlencoded({ extended: false }));

//app.use assign necesary information the app needs to use
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));

// establish the variable to store the controller giving access to the key value pairs
const dogsCTRL = require('./controllers/dogs');

//routes
app.get('/', dogsCTRL.home);
app.get('/dogs', dogsCTRL.index);
app.get('/new', dogsCTRL.new);
app.post('/dogs', dogsCTRL.create);
app.get('/dogs/:dogId', dogsCTRL.show);
app.delete('/dogs/:dogId', dogsCTRL.delete);
app.get('/dogs/:dogId/edit', dogsCTRL.edit);
app.put('/dogs/:dogId', dogsCTRL.update);


app.listen(3000, () => {
  console.log('The express app is ready!');
});

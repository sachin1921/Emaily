const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require("./models/User");
require("./models/Survey");
require("./services/passport");

const authRoutes = require("./routes/authRoutes");
const billingRoutes = require('./routes/billingRoutes');
const surveyRoutes = require('./routes/surveyRoutes');


// mongoose.connect(keys.mongoURI);
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


authRoutes(app);
billingRoutes(app); 
surveyRoutes(app);

if(process.env.NODE_ENV === 'production'){
  //Express will serve up production assets like main.js and main .css files

  app.use(express.static('client/build'));

  //Express will serve up index.html file if it doesnt recognize the route

  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html' ));
  });
};

const PORT = process.env.PORT || 5000;
app.listen(PORT);
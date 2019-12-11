// require dependencies

const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 8080;

const logger = require('morgan');

const cookieParser = require('cookie-parser');

const session = require('cookie-session');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const flash = require('connect-flash');

const app = express();

const cors = require('cors');



// view engine setup

app.use(cors());

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(flash());



// Connecting app to mlab on heroku

const databaseUri = "mongodb://localhost/job_search";

if (process.env.MONGODB_URI) {

  mongoose.connect(process.env.MONGODB_URI)

}else{

  mongoose.connect(databaseUri, {useNewUrlParser: true, useUnifiedTopology: true})

}

mongoose.set('useCreateIndex', true);



// Register routes

require('./routes/routes')(app);



// build on heroku

if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname, "client", "build" , "index.html"));

  })

}



// run server

app.listen(PORT, () => {
    
  console.log(`App running on port ${PORT}!`);
  
});
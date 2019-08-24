const express = require('express')
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');

const pdb = "your db path";

mongoose.connect(pdb, { useNewUrlParser: true });
require('./models/shops');
require('./models/user');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const shops = require('./routes/shops');
const user = require('./routes/user');


app.use(express.static('uploads'));
app.use('/', express.static('frontend/build'));
app.use(bodyParser.json());
app.use(session({
  store: new MongoStore({
      url: pdb
  }),
  name: 'session',
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: (60*60*24-10)*1000,
      secure: false,
      httpOnly: true
  }
}));

app.use('/api/shops', shops);
app.use('/api/user', user);

app.use(error);

app.listen(5000, () =>{
    console.log('app running on port : 5000');
});

function error(err, req, res, next) {
    res.status(500).send({ status: 'error', data: 'Internal Server Error' });
}

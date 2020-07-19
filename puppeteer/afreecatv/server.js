const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const crawler = require('./crawler');

const app = express();

app.use(morgan('dev'));

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("kimhecan"));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "kimhecan",
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'retropect'
}));


app.get('/data', async (req, res) => {
  try {
    const arr = await crawler();
    console.log(typeof arr)
    res.status(200).json(arr);
  } catch (e) {
    res.status(403).send('실패');
    console.error(e);
  }
});


app.listen('3065', () => {
  console.log('server is running on http://localhost:3065');
});




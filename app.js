const express = require('express');
const session = require('express-session');
const router = require('./app/router');
const app = express();
const PORT = process.env.PORT || 3000;


app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(session({
  secret: 'pokedex card',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

app.use((req, res, next) => {

  if(!req.session.filter){
    req.session.filter = 'false';
  }

  next();
});

app.use(router);


app.listen(PORT, () => {
  console.log(`server is listening port ${PORT}`);
});
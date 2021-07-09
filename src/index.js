const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// routes init
const route = require('./routes');

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const models = require('./models');
const routes = require('./routes');

console.log('routes = ', routes)

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.use('/', morgan('combined'));


app.use('/', routes);


models.db.sync()
.then(()=>{
  app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
  });
});

app.use((err, req, res, next) => {
  next(err)
});


const router = require('express').Router();

const models = require('../models');
const Page = models.Page;
const User = models.User;


router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {



  var page = Page.build({
    title: req.body.title,
    content: req.body.content

  });

  page.save()
  .then(()=>{
    res.redirect('/wiki');
  })
  .catch((error)=>console.log(error))

});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

module.exports = router;

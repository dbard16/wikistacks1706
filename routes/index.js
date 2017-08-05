const router = require('express').Router();
const wikiRouter =require('./wiki');
const userRouter = require('./user');

const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', (req, res, next)=>{
Page.findAll()
.then((pages)=>{
  res.locals.pages = pages;
  res.render('index', res.locals.pages)
})
.catch(next);
});

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

module.exports = router;

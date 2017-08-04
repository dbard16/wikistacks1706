const router = require('express').Router();
const wikiRouter =require('./wiki');
const userRouter = require('./user');

router.get('/', (req, res, next)=>res.render('index'));


router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

module.exports = router;

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
  .then((result)=>{
  	console.log('result = ', result.route)
    res.json(result.dataValues);
  })
  .catch((error)=>console.log(error))

});



router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/:urlTitle', function (req, res, next) {
	Page.findOne({
		where: {
			urlTitle: req.params.urlTitle
		}
	})
	.then((foundPage) => {
		console.log('foundPage = ', foundPage.dataValues)
		res.locals.page = foundPage;
		res.render('wikipage', res.locals.page)
	})
	.catch(next);
});

module.exports = router;

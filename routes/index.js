var express = require('express');
var router = express.Router();
var cors = require('cors')
const Url = require('../models/Url')
const helpers = require('../utilities/helpers')

router.use(cors())
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('we are on home')
});


router.get('/shortner', async  function(req, res, next) {
	try {
		const urls =  await Url.find();
		res.json({status:1, urls:urls});
	} catch(err) {
		res.json({status:0, message:err})
	}
});

router.post('/shortner/create', async function(req, res, next) {
	let rand = '';
	let urlString = '';
	do {
		rand = helpers.StrRandom();
		urlString = 'pbid.io/'+rand;
	} while ((await helpers.findUniqueString(Url,urlString)).length !=0)
	
	const url = new Url({
		'original_url':req.body.url,
		'shortened_url': urlString
	});

	url.save()
	.then(data => {
		res.json({status:1, data:data}, 201)
	})
	.catch(err => {
		res.json({ status:0, message:err })
	});
	
});


module.exports = router;

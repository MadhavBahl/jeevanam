var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index.hbs');
});

router.get ('/dashboard', (req, res) => {
	res.render ('dashboard.hbs');
});

router.get('/waste', (req, res) => {
	unirest.post(`http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles=$918800467915&authkey=242704A8yXSd0INO5bc24274&message=Please check, your tap is open. Help Save Water!`)
		.headers({'Accept': 'application/json'})
		.end(function (response) {
			console.log('response is: ', response.body);
			res.render('dashboard.hbs');
		});
});

module.exports = router;

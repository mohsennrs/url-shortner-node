var express = require('express');
var router = express.Router();

var cors = require('cors')

router.use(cors())



/* GET users listing. */
router.post('/shortner', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

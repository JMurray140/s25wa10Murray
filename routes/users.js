var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('value = ' + String(ratio));
});

module.exports = router;
ratio = 0.75;
acc = 1000;


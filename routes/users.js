var express = require('express');
var router = express.Router();

ratio = 0.75;
acc = 1000;

/* GET users listing. */
router.get('/', function(req, res, next) {
  acc = ratio * acc 
  res.send('value = ' + String(acc));
});

module.exports = router;


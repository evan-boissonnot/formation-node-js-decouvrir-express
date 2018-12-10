var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get(/.*wookie$/, function(req, res) {
    res.send('wookie');
});

router.get(/article(\d{1,3})?\/?$/, function(req, res, next) {
    var n;
    if (req.params[0]) // param car grouping en regex
      n = parseInt(req.params[0], 10);
  
    if (!n || (n > 0 && n < 900))
      res.render('article' + (n ? n : ''));
    else
      next();
  });

module.exports = router;

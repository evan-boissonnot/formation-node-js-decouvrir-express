var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:directory/:view', function(req, res, next) {
    console.log(req.params.view);

    res.render(req.params.directory + '/' + req.params.view, { title: 'website' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:directory/:view', function(req, res, next) {
    console.log(req.params.view);

    res.render(req.params.directory + '/' + req.params.view, { title: 'website' });
});

router.param("view", (req, res, next, value, name) => {
    console.log(`view ? ${name}=>${value}`);

    return next();
});

router.param("directory", (req, res, next, value, name) => {
    console.log(`directory ? ${name}=>${value}`);

    return next();
});

module.exports = router;

const express = require('express');
const router = express.Router();



router.get('/', function (req, res, next) {
    res.redirect("/")
    /* res.send('funcionó GET /wiki/') */;
});
router.post('/', function (req, res, next) {
    console.log(req.body)
    /* res.send('funcionó POST /wiki/') */;
});
router.get('/wiki/add', function (req, res) {
    res.render('addpage', function(err,html){res.send(html)});
});


module.exports = router
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET feeutres page. */
router.get('/features', function(req, res) {
  res.render('features', { title: 'Features' });
});

module.exports = router;

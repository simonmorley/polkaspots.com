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

/* GET analytics page. */
router.get('/wifi-analytics', function(req, res) {
  res.render('analytics', { title: 'Analytics' });
});

module.exports = router;

const express    = require('express');
const router     = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* GET projects pages */
router.get('/projects/:name', function (req, res, next) {
  res.render(req.params.name, function(err, data) {
    if (err) {
      console.log(err);
      next(err) // Pass errors to Express.
    } else {
      res.status(200).send(data);
    }
  });
});

/* Handle 404 as last middleware */
router.use(function(req, res, next) {
  res.status(404);
  res.render('404', { title: '404: File Not Found' });
 });

/* Handle 404 as error handler */
router.use(function(err, req, res, next) {
  res.status(404);
  res.render('404', { title: '404: File Not Found' });
 });

module.exports = router;

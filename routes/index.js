var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/oauth/token", function (req, res) {
  console.log ("--------------------------NEW AUTH REQUEST---------------------")
  console.log (req.body);
  console.log ("++++++++++++++++++++++++++END BODY. HEADER:");
  console.log (req.headers);
  console.log ("Sent auth:2YotnFZFEjr1zCsiCMWpAA");
  console.log ("==========================END=============================");

  res.send (JSON.stringify({
    "access_token": "2YotnFZFEjr1zCsiCMWpAA",
    "token_type":"bearer",
    "expires_in":3600,
    "scope":"write"
  }));
});

router.post("/events", function (req, res) {
  console.log ("--------------------------NEW EVENT REQUEST---------------------")
  console.log (req.body);
  console.log ("++++++++++++++++++++++++++END BODY. HEADER:");
  console.log (req.headers);
  console.log (req.headers.authorization)
  console.log ("==========================END=============================");

  res.send ("Success");
})

module.exports = router;

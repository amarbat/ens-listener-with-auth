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
  console.log ("==========================END=============================");

  res.send (JSON.parse(JSON.stringify({
    "access_token": "7jsebp66exqKPBKhFRSjoaH0",
    "token_type":"bearer",
    "expires_in":36000
  })));
});

router.post("/events", function (req, res) {
  console.log ("--------------------------NEW EVENT REQUEST---------------------")
  console.log (req.body);
  console.log ("++++++++++++++++++++++++++END BODY. HEADER:");
  console.log (req.headers);
  console.log ("==========================END=============================");
  if (!req.headers.authorization) {
    res.send(401);
  } else if (req.headers.authorization.split(' ')[1] === "null") {
    res.send(401);
  } else {
    res.send ("Success");
  }
})


module.exports = router;

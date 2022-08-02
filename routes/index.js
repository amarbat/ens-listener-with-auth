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
    "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IjQiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiI3anNlYnA2NmV4cUtQQktoRlJTam9hSDAiLCJjbGllbnRfaWQiOiJkc2FudXpnc3Y2NGpjYzc1Y2FiMWJreGkiLCJlaWQiOjcyNTc3NjQsInN0YWNrX2tleSI6IlM3IiwicGxhdGZvcm1fdmVyc2lvbiI6MiwiY2xpZW50X3R5cGUiOiJTZXJ2ZXJUb1NlcnZlciIsInBpZCI6MTg2fQ.tBNqAzHctfLhcAYc0gXVOazPM3ekNmklDAEbB8cVLsQ.GmZ5IVFmxDEsf6vNcreVFmYrexB0ZpAA8QU-i1n0K8V8e43X_NiesUf7C-X-osoVj8osXiDvPLPWeTBLKDjYOFTmUfYpvhmNjcnIeFqqAk46KPuPyMykjT_aAIKoUokOI9ORF1HU7NCwntFXJsRYK3bhEP88SG-IQcS3T72X5",
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

  res.send ("Success");
})

module.exports = router;

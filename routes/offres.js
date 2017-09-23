var express = require('express');
var router = express.Router();

var offreController = require('../controllers/offreController');

/* GET home page. */
router.get('/',offreController.offre_list);

module.exports = router;
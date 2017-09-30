let express = require('express');
let router = express.Router();

let LieuController = require('../controllers/lieuController');

//GET all Lieu
router.get('/',LieuController.lieu_list);

//GET specific lieu
router.get('/:id',LieuController.lieu_detail);

//POST one Lieu
router.post('/',LieuController.lieu_ajout_post);


module.exports = router;
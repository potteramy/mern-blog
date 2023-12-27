const router = require("express").Router();


const { savePhoto, showPhotos } = require("../../controllers/photo-controller");


router.route("/").post(savePhoto).get(showPhotos);


module.exports = router;

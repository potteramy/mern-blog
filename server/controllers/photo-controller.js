const { Photo } = require("../models");
require("dotenv").config();

module.exports = {
    async uploadPhoto({ body, params}, res) {
        try {
            const photoUpload = await Photo.create({
                photo: body.convertedImage,
                userId: params.userId,
            });
            return res.status(200).json({ status: "success"});
        } catch (err) {
            return res.status(400).json({
                status: "error",
                msg: `Error uploading photo: ${err.message}`
            });
        }
    },
    async showPhotos(req, res) {
        try {
            const photos = await Photo.find();
            return res.status(200).json({ status: "success", photos });
        } catch (err) {
            return res.status(400).json({
                status: "error",
                msg: `Error retrieving image: ${err.message}`,
            });
        }
    },
};
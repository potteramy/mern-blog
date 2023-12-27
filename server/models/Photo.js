const { Schema, model } = require("mongoose");


const photoSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
  }
);

Photo = model("Photo", photoSchema);
module.exports = Photo;

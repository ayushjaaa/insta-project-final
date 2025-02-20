const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  media: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
});

const profileModel = mongoose.model("post", profileSchema);
module.exports = profileModel;

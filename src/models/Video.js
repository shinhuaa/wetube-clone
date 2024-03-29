import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {type:String, required:true, uppercase:true},
  description: {type:String, required:true,},
  createdAt : {type: Date, required: true, default: Date.now},
  hashtags : [{type:String}],
  meta : {
    views: {type:Number, default:0, required:true},
    rating: {type:Number, default:0, required:true},
  },
});

const movieModel = mongoose.model("Video",videoSchema);
export default movieModel;
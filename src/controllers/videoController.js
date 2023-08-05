import Video from "../models/Video"

export const home = async(req, res) => {
  try{
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", {pageTitle: "Home", videos});
  } catch{
    res.render("server-error")  
  }
}
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {pageTitle: `Watching`});
}
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", {pageTitle: `Editing`});
}

export const postEdit = (req,res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
}

export const getUpLoad = (req, res) => {
  return res.render("upload", {pageTitle: "Uploading Video"})
}

export const postUpLoad = async(req, res) => {
  const { title, description, hashtags } = req.body;
  try{
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta:{
        view:0,
        rating:0,  
      }, 
    })
    return res.redirect("/")
  } catch(error){
    console.log(error);
    return res.render("upload", {
      pageTitle: "Uploading Video", 
      errorMessage: error._message,});
  }
}

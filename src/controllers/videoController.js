export const trending = (req, res) => res.send("Home Page Video");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
}
export const edit = (req, res) => {  
  return res.send("Edit Video");
}
export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");

export const deleteVideo = (req, res) => { 
  return res.send("Delete Video");
}


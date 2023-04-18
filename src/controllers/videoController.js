
export const trending = (req, res) => {
  const videos = [
    {
      title:"Fisrt video",
      rating: 4.2,
      comments: 12,
      createdAt: "2 years ago",
      views: 5459,
      id: 1,
    },
    {
      title:"Second video",
      rating: 4.5,
      comments: 22,
      createdAt: "4 days ago",
      views: 459,
      id: 2,
    },
    {
      title:"Thrid video",
      rating: 4.3,
      comments: 32,
      createdAt: "7 weeks ago",
      views: 1324,
      id: 2,
    },
  ];
  return res.render("home", {pageTitle: "Home", videos});
}
export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const edit = (req, res) => res.render("edit",{pageTitle: "Edit"});
export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");

export const deleteVideo = (req, res) => { 
  return res.send("Delete Video");
}


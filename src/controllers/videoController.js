let videos = [
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
    views: 1,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", {pageTitle: "Home", videos});
}
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[ id - 1 ];
  return res.render("watch", {pageTitle: `Watching: ${video.title}`, video});
}
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[ id - 1 ];
  return res.render("edit",{pageTitle: `Editing: ${video.title}`, video});
}

export const postEdit = (req,res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[ id - 1 ].title = title;
  console.log(title);
  return res.redirect(`/videos/${id}`);
}

export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");

export const deleteVideo = (req, res) => res.send("Delete Video"); 


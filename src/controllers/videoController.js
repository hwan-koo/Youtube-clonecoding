let videos = [
    {
        title : "First video",
        rating: 4.8,
        comments: 3,
        createdAt: "3 minutes ago",
        views: 77,
        id: 1
    },
    {
        title : "Second video",
        rating: 4.8,
        comments: 3,
        createdAt: "3 minutes ago",
        views: 77,
        id: 2
    },
    {
        title : "Third video",
        rating: 4.8,
        comments: 3,
        createdAt: "3 minutes ago",
        views: 77,
        id: 3
    }
];

export const recommendedVideos = (req,res) => {

    return res.render("home",{pageTitle:"Home",videos });
}
export const see = (req,res) => res.render("watch");
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send("Search");
export const deleteVideo = (req,res) => res.send("deleteVideo");
export const upload = (req,res) => res.send("Upload");

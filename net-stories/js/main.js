import RandomPost from "./components/aside/RandomPost.js";
import LatestPhoto from "./components/aside/LatestPhoto.js";
import RecentComment from "./components/aside/RecentComment.js";
import PostHeader from "./components/post/PostHeader.js";
import PostMeta from "./components/post/PostMeta.js";
import PostMain from "./components/post/PostMain.js";
import Comment from "./components/post/Comment.js";


window.totallyRandomApp = new Vue({
  el: "#totally-random",
  components: {
    "random-post": RandomPost
  },
  data: {
    randomPosts: [
      {
        sourceLink: "#",
        isLiked: true,
        likes: 6,
        title: "Keep trying.",
        imgSrc: "./img/totally-random/img1.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      },
      {
        sourceLink: "#",
        isLiked: false,
        likes: 18,
        title: "The butterfly effect.",
        imgSrc: "./img/totally-random/img2.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      },
      {
        sourceLink: "#",
        isLiked: false,
        likes: 8,
        title: "Quit smoking, start drinking?",
        imgSrc: "./img/totally-random/img3.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      }
    ]
  }
});

window.latestPhotosApp = new Vue({
  el: "#latest-photos",
  components: {
    "latest-photo": LatestPhoto
  },
  data: {
    photos: [
      {
        link: "#",
        imgSrc: "./img/latest-photos/img1.png"
      },
      {
        link: "#",
        imgSrc: "./img/latest-photos/img2.png"
      },
      {
        link: "#",
        imgSrc: "./img/latest-photos/img3.png"
      }
    ]
  }
});

window.recentCommentsApp = new Vue({
  el: "#recent-comments",
  components: {
    "recent-comment": RecentComment
  },
  data: {
    comments: [
      {
        sourceLink: "#",
        imgSrc: "./img/avatars/img1.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        highlight: false
      },
      {
        sourceLink: "#",
        imgSrc: "./img/avatars/img2.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        highlight: true
      },
      {
        sourceLink: "#",
        imgSrc: "./img/avatars/img1.png",
        text: "Lorem Ipsum is simply dummy text!!! It has survived not only five centuries, but also the leap into electronic...",
        highlight: false
      }
    ]
  }
});

window.mainPostApp = new Vue({
  el: "#main-post",
  components: {
    "post-header": PostHeader,
    "post-meta": PostMeta,
    "post-main": PostMain,
    "comment": Comment
  },
  data: {
    imgSrc: "./img/main-picture.png",
    isLiked: true,
    likes: 14,
    title: "Party people on the image above!",

    date: "15 Dec, 2011",
    tags: ["Dance", "Party", "People"],
    commentsAmount: 2,

    isContentHTML: false,
    content: 
    [
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
    ],
    socialsForShare: 
    [
      {
        link: "#",
        imgSrc: "./img/socials/twitter.png"
      },
      {
        link: "#",
        imgSrc: "./img/socials/facebook.png"
      }
    ],

    comments: 
    [
      {
        avatar: "./img/avatars/img1.png",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        date: "15 Dec, 2011",
        username: "Lucy"
      },
      {
        avatar: "./img/avatars/img2.png",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        date: "15 Dec, 2011",
        username: "Jake"
      }
    ]
  }
});
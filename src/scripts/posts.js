export default [
  {
    id: 0,
    group: "travel",
    author: "Tom",
    message: "Huge hugs from Jamaica",
    image: "/assets/images/images/post1-image.png",
    reactions: [{ name: "heart", amount: 38 }, { name: "smile", amount: 23 }],
    comments: []
  },
  {
    id: 1,
    group: "travel",
    author: "Edd",
    message: "City is beautiful!",
    image: "/assets/images/images/post2-image.png",
    reactions: [{ name: "heart", amount: 12 }, { name: "hand", amount: 14 }],
    comments: [
      {
        avatar: "/assets/images/avatars/Lady-orange.svg",
        text: "Wow! Nice view!"
      }
    ]
  },
  {
    id: 2,
    group: "remember",
    author: "Edd",
    message: "Taste it!",
    image: "/assets/images/images/post3-image.png",
    reactions: [{ name: "heart", amount: 3 }],
    comments: []
  },
  {
    id: 3,
    group: "gifts",
    author: "Reece",
    message: "What do you think?",
    image: "/assets/images/images/post4-image.png",
    reactions: [{ name: "fistBump", amount: 3 }],
    comments: []
  }
];

export default [
  {
    id: 0,
    group: "travel",
    author: "Tom",
    message: "Huge hugs from Jamaica",
    image: "/assets/images/images/post1-image.png",
    reactions: [
      { name: "heart", liked: false, amount: 38 },
      { name: "smile", liked: false, amount: 23 }
    ],
    comments: [],
    size: "small"
  },
  {
    id: 1,
    group: "travel",
    author: "Edd",
    message: "City is beautiful!",
    image: "/assets/images/images/post2-image.png",
    reactions: [
      { name: "heart", liked: false, amount: 12 },
      { name: "smile", liked: false, amount: 14 }
    ],
    comments: [
      {
        avatar: "/assets/images/avatars/Lady-orange.svg",
        text: "Wow! Nice view!"
      }
    ],
    size: "small"
  },
  {
    id: 2,
    group: "home",
    author: "Pat",
    message: "Taste it!",
    image: "/assets/images/images/post3-image.png",
    reactions: [
      { name: "heart", liked: false, amount: 3 },
      { name: "fistBump", liked: false, amount: 14 }
    ],
    comments: [],
    size: "small"
  },
  {
    id: 3,
    group: "gifts",
    author: "Reece",
    message: "What do you think?",
    image: "/assets/images/images/post4-image.png",
    reactions: [{ name: "fistBump", liked: false, amount: 3 }],
    comments: [],
    size: "small"
  },
  {
    id: 4,
    group: "instagram",
    author: "megan",
    message: "Halloween party",
    hashtags: "#family #fun #children #halloween",
    image: "/assets/images/images/post5-image.png",
    likes: 37,
    reactions: null,
    comments: [{ author: "brian", text: "love those two <3" }],
    date: "7 hours"
  },
  {
    id: 5,
    group: "instagram",
    author: "mark",
    likes: 67,
    message: "What do you think?",
    hashtags: "#cars #classics",
    image: "/assets/images/images/alert9-image.png",
    reactions: null,
    comments: [],
    date: "13 hours"
  },
  {
    id: 6,
    group: "animals",
    author: "Emily",
    message: "Cutie",
    image: "/assets/images/images/alert3-image.png",
    reactions: [
      { name: "hand", liked: false, amount: 3 },
      { name: "thumbsDown", liked: false, amount: 0 }
    ],
    comments: [],
    size: "small"
  },
  {
    id: 7,
    group: "remember",
    author: "Tom",
    message: "Someone has to do the paperwork",
    image: "/assets/images/images/post8-image.png",
    reactions: [
      { name: "great", liked: false, amount: 7 },
      { name: "smile", liked: false, amount: 5 }
    ],
    comments: [],
    size: "small"
  },
  {
    id: 8,
    group: "animals",
    author: "Victoria",
    message: "My sweet little boy",
    image: "/assets/images/images/alert2-image.png",
    reactions: [
      { name: "hand", liked: false, amount: 7 },
      { name: "thumbsDown", liked: false, amount: 5 }
    ],
    comments: [],
    size: "small"
  },
  {
    id: 9,
    group: "others",
    author: "Isabella",
    message: "New dance video is out",
    image: "/assets/images/images/image 2.png",
    reactions: [
      { name: "heart", liked: false, amount: 7 },
      { name: "fistBump", liked: false, amount: 5 },
      { name: "smile", liked: false, amount: 3 }
    ],
    comments: [],
    size: "small"
  },
  {
    id: 10,
    group: "photography",
    author: "Lily",
    message: "Having such a nice time on my trip",
    image: "/assets/images/images/alert10-image.png",
    reactions: [
      { name: "fistBump", liked: false, amount: 5 },
      { name: "great", liked: false, amount: 14 }
    ],
    comments: [],
    size: "small"
  },
  {
    id: 11,
    group: "facebook",
    author: "Mark McNugget",
    message: "New personal best!",
    reactions: null,
    image: "/assets/images/images/alert13-image.png",
    avatar: "/assets/images/avatars/avatar2.png",
    comments: 3,
    time: "3 hours"
  },
  {
    id: 12,
    group: "facebook",
    author: "Ricky Smith",
    message: "Semi finals",
    reactions: null,
    image: "/assets/images/images/alert12-image.png",
    avatar: "/assets/images/avatars/avatar5.png",
    time: "5 hours",
    comments: 6
  }
];

import chats from "./chats.js";

const groupFill = [
  {
    members: [
      { name: "Callum", avatar: "/assets/images/avatars/Man happy-orange.svg" },
      { name: "Poppy", avatar: "/assets/images/avatars/Lady-green.svg" },
      { name: "Charlie", avatar: "/assets/images/avatars/Man 2-orange.svg" },
      { name: "Isabella", avatar: "/assets/images/avatars/Lady-blue.svg" }
    ],
    name: "others",
    admin: "Poppy",
    user: "Poppy"
  },
  {
    members: [
      { name: "Joe", avatar: "/assets/images/avatars/Man angry-orange.svg" },
      { name: "Jessica", avatar: "/assets/images/avatars/Lady-green.svg" },
      { name: "Jacob", avatar: "/assets/images/avatars/Man 2-pink.svg" },
      { name: "Isla", avatar: "/assets/images/avatars/Lady-orange.svg" }
    ],
    name: "books",
    admin: "Joe",
    user: "Jacob"
  },
  {
    members: [
      { name: "Ethan", avatar: "/assets/images/avatars/Man-pink.svg" },
      { name: "Lily", avatar: "/assets/images/avatars/Lady-yellow.svg" },
      { name: "Michael", avatar: "/assets/images/avatars/Man happy-pink.svg" },
      { name: "Michelle", avatar: "/assets/images/avatars/Lady-blue.svg" }
    ],
    name: "photography",
    admin: "Lily",
    user: "Ethan"
  },
  {
    members: [
      { name: "George", avatar: "/assets/images/avatars/Man happy-green.svg" },
      { name: "Jessica", avatar: "/assets/images/avatars/Lady-orange.svg" },
      { name: "Alexander", avatar: "/assets/images/avatars/Man 2-yellow.svg" },
      { name: "Jessica", avatar: "/assets/images/avatars/Lady-green.svg" }
    ],
    name: "cars",
    admin: "George",
    user: "George"
  },
  {
    members: [
      { name: "Alexander", avatar: "/assets/images/avatars/Man-green.svg" },
      { name: "Joanne", avatar: "/assets/images/avatars/Lady-orange.svg" },
      { name: "William", avatar: "/assets/images/avatars/Man angry-pink.svg" },
      { name: "Lily", avatar: "/assets/images/avatars/Lady-yellow.svg" }
    ],
    name: "flowers",
    admin: "Joanne",
    user: "Alexander"
  },
  {
    members: [
      { name: "David", avatar: "/assets/images/avatars/Man-pink.svg" },
      { name: "Olivia", avatar: "/assets/images/avatars/Lady-yellow.svg" },
      { name: "Reece", avatar: "/assets/images/avatars/Man 2-yellow.svg" },
      { name: "Emily", avatar: "/assets/images/avatars/Lady-blue.svg" }
    ],
    name: "gifts",
    admin: "David",
    user: "Olivia"
  },
  {
    members: [
      { name: "David", avatar: "/assets/images/avatars/Man 2-pink.svg" },
      { name: "Victoria", avatar: "/assets/images/avatars/Lady-blue.svg" },
      { name: "Reece", avatar: "/assets/images/avatars/Man 2-yellow.svg" },
      { name: "Emily", avatar: "/assets/images/avatars/Lady-pink.svg" }
    ],
    name: "animals",
    admin: "Victoria",
    user: "Reece"
  },
  {
    members: [
      { name: "Ethan", avatar: "/assets/images/avatars/Man happy-orange.svg" },
      { name: "Michelle", avatar: "/assets/images/avatars/Lady-green.svg" },
      { name: "Harry", avatar: "/assets/images/avatars/Man 2-orange.svg" },
      { name: "Bethany", avatar: "/assets/images/avatars/Lady-orange.svg" }
    ],
    name: "repairs",
    admin: "Ethan",
    user: "Michelle"
  },
  {
    members: [
      { name: "George", avatar: "/assets/images/avatars/Man 2-yellow.svg" },
      { name: "Isla", avatar: "/assets/images/avatars/Lady-yellow.svg" },
      { name: "Richard", avatar: "/assets/images/avatars/Man angry-blue.svg" },
      { name: "Isla", avatar: "/assets/images/avatars/Lady-yellow.svg" }
    ],
    name: "painting",
    admin: "George",
    user: "Isla"
  },
  {
    members: [
      {
        name: "Alexander",
        avatar: "/assets/images/avatars/Man angry-yellow.svg"
      },
      { name: "Amelia", avatar: "/assets/images/avatars/Lady-pink.svg" },
      { name: "Oscar", avatar: "/assets/images/avatars/Man angry-orange.svg" },
      { name: "Bethany", avatar: "/assets/images/avatars/Lady-pink.svg" }
    ],
    name: "holidays",
    admin: "Amelia",
    user: "Amelia"
  },
  {
    members: [
      { name: "Callum", avatar: "/assets/images/avatars/Man angry-yellow.svg" },
      { name: "Jessica", avatar: "/assets/images/avatars/Lady-orange.svg" },
      { name: "William", avatar: "/assets/images/avatars/Man angry-blue.svg" },
      { name: "Jessica", avatar: "/assets/images/avatars/Lady-blue.svg" }
    ],
    name: "outgoings",
    admin: "Callum",
    user: "Callum"
  },
  {
    members: [
      { name: "Mason", avatar: "/assets/images/avatars/Man happy-blue.svg" },
      { name: "Lauren", avatar: "/assets/images/avatars/Lady-pink.svg" },
      { name: "William", avatar: "/assets/images/avatars/Man angry-blue.svg" },
      { name: "Poppy", avatar: "/assets/images/avatars/Lady-pink.svg" }
    ],
    name: "wedding",
    admin: "Mason",
    user: "William"
  },
  {
    members: [
      { name: "Oliver", avatar: "/assets/images/avatars/Man-green.svg" },
      { name: "Lauren", avatar: "/assets/images/avatars/Lady-blue.svg" },
      { name: "Joe", avatar: "/assets/images/avatars/Man happy-pink.svg" },
      { name: "Elizabeth", avatar: "/assets/images/avatars/Lady-yellow.svg" }
    ],
    name: "music",
    admin: "Lauren",
    user: "Lauren"
  },
  {
    members: [
      { name: "Harry", avatar: "/assets/images/avatars/Man-green.svg" },
      { name: "Poppy", avatar: "/assets/images/avatars/Lady-pink.svg" },
      { name: "Oliver", avatar: "/assets/images/avatars/Man happy-pink.svg" },
      { name: "Megan", avatar: "/assets/images/avatars/Lady-pink.svg" }
    ],
    name: "space",
    admin: "Poppy",
    user: "Harry"
  }
];

const groups = [
  {
    name: "travel",
    color: "#509df6",
    active: false,
    icon: "/assets/images/icons/travel.svg",
    admin: "Edd",
    user: "Mark",
    reactions: [
      { name: "heart", color: "#faa2ce" },
      { name: "smile", color: "#aa1cef" }
    ],
    members: [
      {
        name: "Tom",
        avatar: "/assets/images/avatars/Man happy 2-blue.svg"
      },
      {
        name: "Edd",
        avatar: "/assets/images/avatars/avatar2.png"
      },
      {
        name: "Mark",
        avatar: "/assets/images/avatars/Man-blue.svg"
      },
      {
        name: "Sandra",
        avatar: "/assets/images/avatars/Lady-orange.svg"
      }
    ],
    chat: null,
    posts: []
  },
  {
    name: "facebook",
    color: "#3b5988",
    active: false,
    icon: "/assets/images/icons/facebook.svg",
    chat: null
  },
  {
    name: "instagram",
    active: false,
    color: "instagram",
    icon: "/assets/images/icons/instagram.svg",
    chat: null
  },
  {
    name: "home",
    color: "#e39d33",
    active: false,
    icon: "/assets/images/icons/home.svg",
    chat: null,
    reactions: [
      { name: "heart", color: "#faeccb" },
      { name: "fistBump", color: "#ac2b73" }
    ],
    admin: "Kate",
    user: "Mark",
    members: [
      {
        name: "Kate",
        avatar: "/assets/images/avatars/Man happy 2-blue.svg"
      },
      {
        name: "Pat",
        avatar: "/assets/images/avatars/Man angry-yellow.svg"
      },
      {
        name: "Mark",
        avatar: "/assets/images/avatars/Lady-blue.svg"
      }
    ],
    posts: []
  },
  {
    name: "others",
    color: "#efaeae",
    active: false,
    icon: "/assets/images/icons/others.svg",
    reactions: [
      { name: "heart", color: "#41c89a" },
      { name: "fistBump", color: "#aa2ef6" },
      { name: "smile", color: "#b7c3a0" }
    ],
    chat: null,
    posts: []
  },
  // {
  //   name: "pinterest",
  //   color: "pinterest",
  //   active: false,
  //   icon: "/assets/images/icons/pinterest.svg",
  //   chat: null
  // },
  {
    name: "remember",
    color: "#e39d33",
    active: false,
    icon: "/assets/images/icons/remember.svg",
    chat: null,
    user: "Ann",
    admin: "Tom",
    reactions: [
      { name: "great", color: "#fbb774" },
      { name: "smile", color: "#99ced0" }
    ],
    members: [
      {
        name: "Tom",
        avatar: "/assets/images/avatars/Man happy 2-violet.svg"
      },
      {
        name: "Ann",
        avatar: "/assets/images/avatars/Lady-blue.svg"
      },
      {
        name: "Edd",
        avatar: "/assets/images/avatars/Man angry-green.svg"
      }
    ],
    posts: []
  },
  {
    name: "school",
    color: "#5ECB8A",
    active: false,
    icon: "/assets/images/icons/school.svg",
    admin: "Tom",
    user: "Mark",
    reactions: [
      { name: "heart", color: "#0249dd" },
      { name: "thumbsDown", color: "#b7a366" },
      { name: "great", color: "#98ee20" }
    ],
    members: [
      {
        name: "Tom",
        avatar: "/assets/images/avatars/Man happy 2-blue.svg"
      },
      {
        name: "Jay",
        avatar: "/assets/images/avatars/Man angry-yellow.svg"
      },
      {
        name: "Mark",
        avatar: "/assets/images/avatars/Lady-blue.svg"
      }
    ],
    chat: null,
    posts: []
  },
  {
    name: "animals",
    color: "#E870AE",
    active: false,
    icon: "/assets/images/icons/dogs.svg",
    chat: null,
    reactions: [
      { name: "hand", color: "#4696af" },
      { name: "thumbsDown", color: "#d57801" }
    ],
    posts: []
  },
  {
    name: "decorations",
    color: "#cccccc",
    active: false,
    icon: "/assets/images/icons/decorations.svg",
    admin: "Mike",
    user: "Mark",
    reactions: [
      { name: "heart", color: "#c3de5d" },
      { name: "thumbsDown", color: "#9194f1" }
    ],
    members: [
      {
        name: "Mike",
        avatar: "/assets/images/avatars/Man happy 2-blue.svg"
      },
      {
        name: "Chuk",
        avatar: "/assets/images/avatars/Man angry-yellow.svg"
      },
      {
        name: "Mark",
        avatar: "/assets/images/avatars/Lady-blue.svg"
      }
    ],
    chat: null,
    posts: []
  },
  {
    name: "books",
    color: "#e39d33",
    icon: "/assets/images/icons/books.svg",
    active: false,
    chat: null,
    reactions: [
      { name: "fistBump", color: "#b7e2ce" },
      { name: "great", color: "#0249dd" }
    ],
    posts: []
  },
  {
    name: "shopping",
    color: "#E870AE",
    icon: "/assets/images/icons/shopping.svg",
    active: false,
    admin: "John",
    user: "Mark",
    reactions: [
      { name: "fistBump", color: "#345b85" },
      { name: "great", color: "#ac9873" },
      { name: "hand", color: "#b12ef8" }
    ],
    members: [
      {
        name: "John",
        avatar: "/assets/images/avatars/Man happy 2-blue.svg"
      },
      {
        name: "Adam",
        avatar: "/assets/images/avatars/Man angry-yellow.svg"
      },
      {
        name: "Mark",
        avatar: "/assets/images/avatars/Lady-blue.svg"
      }
    ],
    chat: null,
    posts: []
  },
  {
    name: "photography",
    color: "#9764f6",
    icon: "/assets/images/icons/photography.svg",
    active: false,
    chat: null,
    reactions: [
      { name: "fistBump", color: "#d57801" },
      { name: "great", color: "#1d1ffe" }
    ],
    posts: []
  },
  {
    name: "cars",
    color: "#509df6",
    active: false,
    icon: "/assets/images/icons/cars.svg",
    chat: null,
    reactions: [
      { name: "fistBump", color: "#4f4c69" },
      { name: "thumbsDown", color: "#d13772" }
    ],
    posts: []
  },
  {
    name: "flowers",
    color: "#509df6",
    active: false,
    icon: "/assets/images/icons/flowers.svg",
    chat: null,
    reactions: [
      { name: "hand", color: "#ee5046" },
      { name: "fistBump", color: "#6af3e1" }
    ],
    posts: []
  },
  {
    name: "gifts",
    color: "#e39d33",
    icon: "/assets/images/icons/gifts.svg",
    chat: null,
    active: false,
    reactions: [{ name: "fistBump", color: "#7c6e41" }],
    posts: []
  },
  {
    name: "repairs",
    color: "#cccccc",
    active: false,
    icon: "/assets/images/icons/repairs.svg",
    reactions: [
      { name: "hand", color: "#b12ef8" },
      { name: "thumbsDown", color: "#add042" },
      { name: "heart", color: "#7c6e41" }
    ],
    chat: null,
    posts: []
  },
  {
    name: "painting",
    active: false,
    color: "#efaeae",
    icon: "/assets/images/icons/painting.svg",
    reactions: [
      { name: "heart", color: "#98ee20" },
      { name: "fistBump", color: "#b12ef8" }
    ],
    chat: null,
    posts: []
  },
  {
    name: "artists",
    color: "#509df6",
    active: false,
    icon: "/assets/images/icons/artists.svg",
    admin: "Monic",
    reactions: [
      { name: "heart", color: "#c3de5d" },
      { name: "great", color: "#2472a0" }
    ],
    user: "Mark",
    members: [
      {
        name: "Jacob",
        avatar: "/assets/images/avatars/Man happy 2-blue.svg"
      },
      {
        name: "Monic",
        avatar: "/assets/images/avatars/Man angry-yellow.svg"
      },
      {
        name: "Mark",
        avatar: "/assets/images/avatars/Lady-blue.svg"
      }
    ],
    chat: null,
    posts: []
  },
  {
    name: "holidays",
    color: "#e39d33",
    active: false,
    icon: "/assets/images/icons/holidays.svg",
    reactions: [
      { name: "fistBump", color: "#d88f6a" },
      { name: "smile", color: "#22afa9" }
    ],
    chat: null,
    posts: []
  },
  {
    name: "outgoings",
    color: "#9764f6",
    active: false,
    icon: "/assets/images/icons/outgoings.svg",
    reactions: [
      { name: "great", color: "#4f4c69" },
      { name: "smile", color: "#ee5046" },
      { name: "fistBump", color: "#3a1903" }
    ],
    chat: null,
    posts: []
  },
  {
    name: "wedding",
    color: "#ef7b69",
    active: false,
    icon: "/assets/images/icons/wedding.svg",
    reactions: [
      { name: "great", color: "#ac9873" },
      { name: "heart", color: "#d13772" }
    ],
    chat: null,
    posts: []
  },
  {
    name: "music",
    color: "#509df6",
    active: false,
    reactions: [
      { name: "smile", color: "#9194f1" },
      { name: "heart", color: "#67c160" }
    ],
    icon: "/assets/images/icons/music.svg",
    chat: null,
    posts: []
  },
  {
    name: "space",
    color: "#E870AE",
    active: false,
    icon: "/assets/images/icons/space.svg",
    reactions: [
      { name: "fistBump", color: "#d13772" },
      { name: "great", color: "#ac9873" },
      { name: "thumbsDown", color: "#9194f1" }
    ],
    chat: {
      messages: []
    },
    posts: []
  }
];

groupFill.forEach(el => {
  groups.find(group => {
    if (group.name === el.name) {
      Object.assign(group, el);
    }
  });
});

chats.forEach(chat => {
  const group = groups.find(el => el.name === chat.group);
  group.chat = chat.content;
});

groups.forEach(el => {
  el.width = "medium";
  el.height = "medium";
});

export default groups;

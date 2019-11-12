// import posts from "./posts.js";
import chats from "./chats.js";

const asd = [
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
    name: "dogs",
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
      { name: "Alexander", avatar: "/assets/images/avatars/Man angry-yellow.svg" },
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
    color: "blue",
    active: false,
    icon: "/assets/images/icons/travel.svg",
    admin: "Edd",
    user: "Mark",
    reactions: ["heart", "hand"],
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
      }
    ],
    chat: null,
    posts: []
  },
  {
    name: "home",
    color: "yellow",
    active: false,
    icon: "/assets/images/icons/home.svg",
    chat: null,
    reactions: ["heart", "fistBump"],
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
    color: "lightPink",
    active: false,
    icon: "/assets/images/icons/others.svg",
    reactions: ["heart", "fistBump", "smile"],
    chat: null,
    posts: []
  },
  {
    name: "school",
    color: "green",
    active: false,
    icon: "/assets/images/icons/school.svg",
    admin: "Tom",
    user: "Mark",
    reactions: ["heart", "facepalm", "glasses"],
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
    name: "decorations",
    color: "gray",
    active: false,
    icon: "/assets/images/icons/decorations.svg",
    admin: "Mike",
    user: "Mark",
    reactions: ["heart", "facepalm"],
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
    color: "yellow",
    icon: "/assets/images/icons/books.svg",
    active: false,
    chat: null,
    reactions: ["fistBump", "glasses"],
    posts: []
  },
  {
    name: "shopping",
    color: "pink",
    icon: "/assets/images/icons/shopping.svg",
    active: false,
    admin: "John",
    user: "Mark",
    reactions: ["fistBump", "glasses", "hand"],
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
    color: "violet",
    icon: "/assets/images/icons/photography.svg",
    active: false,
    chat: null,
    reactions: ["fistBump", "glasses"],
    posts: []
  },
  {
    name: "cars",
    color: "blue",
    active: false,
    icon: "/assets/images/icons/cars.svg",
    chat: null,
    reactions: ["fistBump", "facepalm"],
    posts: []
  },
  {
    name: "flowers",
    color: "blue",
    active: false,
    icon: "/assets/images/icons/flowers.svg",
    chat: null,
    reactions: ["hand", "fistBump"],
    posts: []
  },
  {
    name: "gifts",
    color: "yellow",
    icon: "/assets/images/icons/gifts.svg",
    chat: null,
    active: false,
    reactions: ["hand", "glasses"],
    posts: []
  },
  {
    name: "dogs",
    color: "pink",
    active: false,
    icon: "/assets/images/icons/dogs.svg",
    chat: null,
    reactions: ["hand", "facepalm"],
    posts: []
  },
  {
    name: "repairs",
    color: "gray",
    active: false,
    icon: "/assets/images/icons/repairs.svg",
    reactions: ["hand", "facepalm", "heart"],
    chat: null,
    posts: []
  },
  {
    name: "painting",
    active: false,
    color: "lightPink",
    icon: "/assets/images/icons/painting.svg",
    reactions: ["heart", "fistBump"],
    chat: null,
    posts: []
  },
  {
    name: "artists",
    color: "blue",
    active: false,
    icon: "/assets/images/icons/artists.svg",
    admin: "Monic",
    reactions: ["heart", "glasses"],
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
    color: "yellow",
    active: false,
    icon: "/assets/images/icons/holidays.svg",
    reactions: ["fistBump", "smile"],
    chat: null,
    posts: []
  },
  {
    name: "remember",
    color: "yellow",
    active: false,
    icon: "/assets/images/icons/remember.svg",
    chat: null,
    user: "Ann",
    admin: "Tom",
    reactions: ["glasses", "smile"],
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
    name: "outgoings",
    color: "violet",
    active: false,
    icon: "/assets/images/icons/outgoings.svg",
    reactions: ["glasses", "smile", "fistBump"],
    chat: null,
    posts: []
  },
  {
    name: "wedding",
    color: "orange",
    active: false,
    icon: "/assets/images/icons/wedding.svg",
    reactions: ["glasses", "heart"],
    chat: null,
    posts: []
  },
  {
    name: "music",
    color: "blue",
    active: false,
    reactions: ["smile", "heart"],
    icon: "/assets/images/icons/music.svg",
    chat: null,
    posts: []
  },
  {
    name: "space",
    color: "pink",
    active: false,
    icon: "/assets/images/icons/space.svg",
    reactions: ["fistBump", "glasses", "facepalm"],
    chat: {
      messages: []
    },
    posts: []
  }
];

asd.forEach(el => {
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

export default groups;

import DMItem from "./components/DMItem.js";
import OMItem from "./components/OMItem.js";

window.dailyMenuApp = new Vue({
  el: "#daily-menu",
  components: {
    "dm-item": DMItem
  },
  data: {
    onlyVeganMenu: false,

    items: [
      {
        imgSrc: "./img/icons/daily-menu/img1.png",
        header: "Raw meat with BBQ",
        cost: "10$",
        allergens: "4, 8, 12",
        veganFood: false,
        link: "#"
      },
      {
        imgSrc: "./img/icons/daily-menu/img2.png",
        header: "fresh trout",
        cost: "13$",
        allergens: "4, 9",
        veganFood: false,
        link: "#"
      },
      {
        imgSrc: "./img/icons/daily-menu/img3.png",
        header: "mushroom soup",
        cost: "9$",
        allergens: "1, 3, 11",
        veganFood: true,
        link: "#"
      },
      {
        imgSrc: "./img/icons/daily-menu/img4.png",
        header: "chicken with potatoes",
        cost: "18$",
        allergens: "4, 8, 17",
        veganFood: false,
        link: "#"
      },
      {
        imgSrc: "./img/icons/daily-menu/img5.png",
        header: "Pasta with tomato purée",
        cost: "12$",
        allergens: "2, 6",
        veganFood: true,
        link: "#"
      },
      {
        imgSrc: "./img/icons/daily-menu/img6.png",
        header: "salad with beetroot",
        cost: "6$",
        allergens: "NONE",
        veganFood: true,
        link: "#"
      }
    ]
  }
});

window.onlineMenuApp = new Vue({
  el: "#online-menu-carousel",
  components: {
    "om-item": OMItem
  },
  data: {
    items: [
      {
        imgSrc: "./img/online-menu/spaghetti.png",
        header: "Spaghetti with fresh tomatoes and dressing",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        buttonText: "12$ - ORDER"
      },
      {
        imgSrc: "./img/online-menu/meat.png",
        header: "Meat with vegetables very tasty",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
        buttonText: "15$ - ORDER"
      },
      {
        imgSrc: "./img/online-menu/theplov.png",
        header: "The Plov Lorem ispum dolor sit amet",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        buttonText: "10$ - ORDER"
      }
    ]
  }
});
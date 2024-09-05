"use script";
// Mobile view

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelectorAll("#hlink");
const faSolid = document.querySelector(".fa-solid");

const navbar = document.querySelector("header");

window.onscroll = function () {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-color-primary-dark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-color-gray");
  } else {
    navbar.classList.remove("bg-color-primary-dark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-color-gray");
  }
};

hamburger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-times");
});

hlink.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-times");
  });
});

// Testimonial

const userTexts = document.querySelectorAll(".user-text");
const userPics = document.querySelectorAll(".user-pic");

userPics.forEach((pic) => {
  pic.addEventListener("click", function (event) {
    // Remove active classes from all pictures and texts
    userPics.forEach((userPic) => userPic.classList.remove("active-pic"));
    userTexts.forEach((userText) => userText.classList.remove("active-text"));

    // Find the index of the clicked picture
    let i = Array.from(userPics).indexOf(event.target);

    // Check if the index is valid
    if (i !== -1) {
      userPics[i].classList.add("active-pic");
      userTexts[i].classList.add("active-text");
      console.log("Text made active:", userTexts[i]);
    }
  });
});

const toggleBtn = document.getElementById("toggleBtn");
const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");

  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");

  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});

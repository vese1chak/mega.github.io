document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const body = document.querySelector("body");

  const moveBurger = () => {
    if (!burger.classList.contains("active")) {
      burger.classList.add("active");
      nav.classList.add("active");
      body.classList.add("lock");
    } else {
      burger.classList.remove("active");
      nav.classList.remove("active");
      body.classList.remove("lock");
    }
  };

  burger.addEventListener("click", moveBurger); // Your code goes here
});

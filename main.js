const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

// Відкриваємо меню
burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

// Закриваємо меню
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

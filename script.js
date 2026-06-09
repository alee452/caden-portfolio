const gear = document.querySelector(".gear");
const overlay = document.querySelector(".overlay");

gear.addEventListener("click", () => {
    gear.classList.add("active");
    overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
    gear.classList.remove("active");
    overlay.classList.remove("show");
});





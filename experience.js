//gear code
const overlay = document.querySelector(".overlay");
const lines = document.querySelector(".lines");
const gear = document.querySelector("#gear");
const circle = document.querySelector("#circle");
const education = document.querySelector("#Education");
const home = document.querySelector("#Home");
const engineering = document.querySelector("#Engineering");
const experience = document.querySelector("#Experience");

circle.addEventListener("click", () => {
    overlay.classList.add("show");
    lines.classList.add("active");
    gear.classList.add("cursor");
    circle.classList.add("noshow");
    setTimeout(() => {
        education.classList.add("fadein");
        home.classList.add("fadein");
        engineering.classList.add("fadein");
        experience.classList.add("fadein");
    }, 1200);
    document.body.classList.add('no-scroll');
});


gear.addEventListener("click", () => {
    overlay.classList.add("show");
    lines.classList.add("active");
    gear.classList.add("cursor");
    circle.classList.add("noshow");
    setTimeout(() => {
        education.classList.add("fadein");
        home.classList.add("fadein");
        engineering.classList.add("fadein");
        experience.classList.add("fadein");
    }, 1200);
    document.body.classList.add('no-scroll');
});

overlay.addEventListener("click", () => {
    education.classList.remove("fadein");
    home.classList.remove("fadein");
    engineering.classList.remove("fadein");
    experience.classList.remove("fadein");
    circle.classList.remove("noshow");

    setTimeout(() => {
        overlay.classList.remove("show");
        lines.classList.remove("active");
        gear.classList.remove("cursor");
    }, 1000);
    document.body.classList.remove('no-scroll');
});


education.addEventListener("click", () => {
    window.location.href = "education.html";
});

experience.addEventListener("click", () => {
    window.location.href = "experience.html";
});

home.addEventListener("click", () => {
    window.location.href = "index.html";
});
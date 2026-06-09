const overlay = document.querySelector(".overlay");
const lines = document.querySelector(".lines");
const gear = document.querySelector("#gear");
const lines2 = document.querySelector("#lines");




gear.addEventListener("click", () => {
    overlay.classList.add("show");
    lines.classList.add("active");
    setTimeout(() => {
        lines2.classList.toggle("fadein");
    }, 1200);
    document.body.classList.add('no-scroll');
});

overlay.addEventListener("click", () => {
    lines2.classList.remove("fadein");

    setTimeout(() => {
        overlay.classList.remove("show");
        lines.classList.remove("active");
    }, 1000);
    document.body.classList.remove('no-scroll');
});





const container = document.querySelector(".container");
const darkness = document.querySelector(".darkness");
container.addEventListener("mousemove", (event) => {

    const x = event.clientX;

    const y = event.clientY;

    darkness.style.setProperty("--x", x + "px");
    darkness.style.setProperty("--y", y + "px");
});
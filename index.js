// script.js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickMeBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        message.textContent = "Thanks !";
    });
});

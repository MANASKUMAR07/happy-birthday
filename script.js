function showMessage() {
    document.getElementById("msgCard").style.display = "block";
}

// Floating hearts effect
const hearts = document.querySelector('.hearts');

setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 300);

// YES answer
function yesAnswer() {
    alert("Yay! I love you too Kalyani ❤️🥰");
}

// NO button runs away
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

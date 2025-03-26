document.addEventListener("DOMContentLoaded", function() {
    let mysteryText = document.getElementById("mystery-text");
    let sirenSound = document.getElementById("siren-sound");

    // Change text after a delay
    setTimeout(() => {
        mysteryText.innerText = "DO YOU HEAR IT?";
    }, 3000);

    setTimeout(() => {
        mysteryText.innerText = "IT'S COMING...";
    }, 6000);

    // Force fullscreen and play loud sound
    setTimeout(() => {
        document.documentElement.requestFullscreen();
        sirenSound.volume = 1.0; // Full volume
        sirenSound.play();
    }, 8000); // 3 seconds delay before loud sound

    // Glitch effect
    setTimeout(() => {
        setInterval(() => {
            document.body.style.backgroundColor = (Math.random() < 0.5) ? "black" : "red";
        }, 100);
    }, 9000);
});

document.addEventListener("DOMContentLoaded", function() {
    let mysteryText = document.getElementById("mystery-text");
    let alarmSound = document.getElementById("alarm-sound");

    document.body.addEventListener("click", function startPrank() {
        document.body.removeEventListener("click", startPrank); // Remove event listener after first click

        // Change text step by step
        setTimeout(() => { mysteryText.innerText = "DO YOU HEAR IT?"; }, 3000);
        setTimeout(() => { mysteryText.innerText = "IT'S COMING..."; }, 6000);

        // Fullscreen and play sound
        setTimeout(() => {
            document.documentElement.requestFullscreen().catch(err => console.log("Fullscreen failed:", err));
            alarmSound.volume = 1.0;
            alarmSound.play().catch(err => console.log("Audio playback failed:", err));
        }, 8000);

        // Glitch screen effect
        setTimeout(() => {
            setInterval(() => {
                document.body.style.backgroundColor = (Math.random() < 0.5) ? "black" : "red";
            }, 100);
        }, 9000);
    });
});

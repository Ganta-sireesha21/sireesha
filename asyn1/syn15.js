
let seconds = parseInt(prompt("Enter countdown time in seconds:"), 10);

console.log(`Countdown started for ${seconds} seconds...`);
let timer = setInterval(() => {
    console.log("Time left:", seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown Complete!");
    }
}, 1000);
document.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.key.toLowerCase() === "s") {
            clearInterval(timer);
            console.log("Countdown Stopped by User!");
        }
    }, 200); 
});

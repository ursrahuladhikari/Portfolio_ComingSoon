// JavaScript for the reverse countdown timer
const timerElement = document.getElementById('timer');

// Starting point: 10 days in milliseconds
let countdownTime = 10 * 24 * 60 * 60 * 1000; // 10 days

// Update the countdown every second
const countdown = setInterval(() => {
    if (countdownTime <= 0) {
        clearInterval(countdown);
        timerElement.textContent = "00:00:00:00";
        return;
    }

    countdownTime -= 1000; // Decrease by 1 second (1000 ms)

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

    // Format the time to always show two digits
    const formattedTime = 
        String(days).padStart(2, '0') + ':' +
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    // Display the updated time
    timerElement.textContent = formattedTime;

}, 1000);
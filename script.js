const timer = document.getElementById("timer");

setInterval(
    function () {
        timer = timer++
    }, 1000
);

document.getElementById("timer").textContent = timer
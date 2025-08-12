const timer = document.getElementById("timer");

setInterval(
    function () {
        timer = timer++
        document.getElementById("timer").innerText = timer
    }, 1000
);
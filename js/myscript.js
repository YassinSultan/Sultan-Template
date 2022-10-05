// counter down event section
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime()
let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24)
    document.querySelector(".days").innerHTML = days 
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60)
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds
    if (dateDiff == 0) {
        clearInterval(counter)
    }
}, 1000);

let skillSection = document.querySelector(".our-skills-section");
let statsSection = document.querySelector(".stats-section")
let progressSpans = document.querySelectorAll(".progress span");
let numbers = document.querySelectorAll(".stats-section .number")
let stated = false
window.onscroll = function () {
    // awesome stats
    if (window.scrollY >= statsSection.offsetTop - 300) {
        if (!stated) {
            console.log("started")
            numbers.forEach((number) => startCount(number))
            stated = true
        }
    }
    // progress span section
    if (window.scrollY >= skillSection.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

}
function startCount(el) {
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 500 / goal)
}
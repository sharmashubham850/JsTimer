const durationInput = document.querySelector('#duration-input');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');

const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration) {

        if (duration === 0)
            duration = totalDuration;

    },

    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * (timeRemaining / duration) - perimeter);
    },

    onComplete() {
        console.log("Timer completed")
    }

});

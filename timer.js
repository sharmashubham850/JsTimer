class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }

    // Getter
    get timeRemaining() {
        return this.durationInput.value;
    }

    // Setter
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

    start = () => {
        clearInterval(this.interval)
        if (this.onStart)
            this.onStart(this.timeRemaining);
        this.tick();
        this.interval = setInterval(this.tick, 20);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) this.onComplete();
        }
        else {
            this.timeRemaining = this.timeRemaining - .02;
            if (this.onTick) this.onTick(this.timeRemaining);
        };
    }

    pause = () => {
        clearInterval(this.interval)
    }
}

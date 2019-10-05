class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.array = [];
        for (let i = min; i <= max; i++) {
            this.array.push(i);
        }
        this.startIndex = 0;
        this.endIndex = this.array.length - 1;
        this.middleIndex = Math.ceil((this.startIndex + this.endIndex) / 2);
    }

    guess() {
        return this.array[this.middleIndex];
    }

    lower() {
        this.endIndex = this.middleIndex;
        this.middleIndex = Math.ceil((this.startIndex + this.endIndex) / 2);
    }

    greater() {
        this.startIndex = this.middleIndex;
        this.middleIndex = Math.ceil((this.startIndex + this.endIndex) / 2);
    }
}

module.exports = GuessingGame;

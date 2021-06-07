class BowlingGame {
    constructor() {
        this.score = 0
    }


    getScore(){
        return this.score
    }

    roll(points) {
        this.score+=points
    }
}

module.exports = {BowlingGame}


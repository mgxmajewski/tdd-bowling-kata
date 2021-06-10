class BowlingGame {
    constructor() {
        this.score = 0
        this.allRollsArr = []
    }

    getScore() {
        return this.score
    }

    getAllRollsArr() {
        return this.allRollsArr
    }

    roll(rolls) {
        this.score += rolls
    }

    allRolls(...args) {
        this.allRollsArr = Array.from(args)
    }
}

module.exports = {BowlingGame}


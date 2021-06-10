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

    allRolls(...bowlRolls) {
        this.allRollsArr = Array.from(bowlRolls)
    }
}

module.exports = {BowlingGame}


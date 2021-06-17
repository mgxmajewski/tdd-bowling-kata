class BowlingGame {
    constructor() {
        this.allRollsArr = []
    }

    checkForSpare(bowlThrow, nextThrow) {
        return bowlThrow + nextThrow === 10;
    }

    checkForStrike(bowlThrow, nextThrow) {
        return bowlThrow === 10 || nextThrow === 10;
    }

    get ScoreFromArray() {
        let tempScore = 0;
        let bowlThrows = this.getAllRollsArr()
        let bowlThrowsLen = bowlThrows.length-2
        for (let i = 0; i <= bowlThrowsLen; i+=2) {
            if (this.checkForStrike(bowlThrows[i], bowlThrows[i + 1])) {
                tempScore += 10 + bowlThrows[i + 2] + bowlThrows[i + 3]
            } else if (this.checkForSpare(bowlThrows[i], bowlThrows[i + 1])) {
                tempScore += 10 + bowlThrows[i + 2]
            } else  {
                tempScore += bowlThrows[i] + bowlThrows[i + 1]
            }
        }
        return tempScore
    }

    getAllRollsArr() {
        return this.allRollsArr
    }

    allRolls(...bowlRolls) {
        this.allRollsArr = Array.from(bowlRolls)
    }
}

module.exports = {BowlingGame}


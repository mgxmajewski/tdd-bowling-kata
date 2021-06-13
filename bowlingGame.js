class BowlingGame {
    constructor() {
        this.score = 0
        this.allRollsArr = []
    }

    getScore() {
        return this.score
    }

    checkForSpare(bowlThrow, nextThrow) {
        return bowlThrow + nextThrow === 10;
    }

    getScoreFromArray() {
        let tempScore = 0;
        let bowlThrows = this.getAllRollsArr()
        for (let i = 0; i <= bowlThrows.length; i+=2) {
            if (this.checkForSpare(bowlThrows[i], bowlThrows[i+1])){
                tempScore += 10 + bowlThrows[i+2]
            } else if (i+1  <= bowlThrows.length){
                tempScore += bowlThrows[i] + bowlThrows[i+1]
            }
        }
        console.log(tempScore)
        return tempScore
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


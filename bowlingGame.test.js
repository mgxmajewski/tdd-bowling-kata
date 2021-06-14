const {BowlingGame} = require('./bowlingGame.js')

describe('BowlingGame', () => {
    let Game
    beforeEach(() => {
        Game = new BowlingGame()
    });

    test('should score zero when no rolls', () => {
        let result = Game.getScore()
        expect(result).toEqual(0);
    });

    test('should score one when no rolled one', () => {
        Game.roll(1)
        let result = Game.getScore()
        expect(result).toEqual(1);
    });

    function roll(throws, pins) {
        for (let i = 0; i < throws; i++) {
            Game.roll(pins)
        }
    }

    test('should score twenty when rolled twenty times', () => {
        roll(20, 1);
        let result = Game.getScore()
        expect(result).toEqual(20)
    });

    test('should score zero when rolled twenty times', () => {
        roll(20, 0)
        let result = Game.getScore()
        expect(result).toEqual(0)
    });

    test('should create array with all rolls', () => {
        Game.allRolls(1, 2, 3, 4, 5)
        let result = Game.getAllRollsArr()
        expect(result).toEqual([1,2,3,4,5])
    });

    test('should score spare', () => {
        Game.allRolls(5,5,4,0,6,4,3,0,0,6,9,0,0,0,0,0,0,0,0,0)
        let result = Game.getScoreFromArray()
        expect(result).toEqual(49)
    });

    test('should validate spare',  () => {
        Game.allRolls(5,5)
        let result = Game.checkForSpare(5,5)
        expect(result).toBe(true)
    });

    test('should validate strike',  () => {
        Game.allRolls(0,10)
        let result = Game.checkForStrike(0,10)
        expect(result).toBe(true)
    });

    test('should score strike', () => {
        Game.allRolls(0,10,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
        let result = Game.getScoreFromArray()
        expect(result).toEqual(26)
    });
})


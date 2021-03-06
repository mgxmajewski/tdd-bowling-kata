const {BowlingGame} = require('./bowlingGame.js')

describe('BowlingGame', () => {
    let Game
    beforeEach(() => {
        Game = new BowlingGame()
    });

    test('should score zero when no rolls', () => {
        let result = Game.ScoreFromArray
        expect(result).toEqual(0);
    });

    test('should score one when no rolled one', () => {
        Game.allRolls(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
        let result = Game.ScoreFromArray
        expect(result).toEqual(1);
    });

    test('should score hundred fifty when rolled 10 pairs of 5 and spare, with a final 5', () => {
        Game.allRolls(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5)
        let result = Game.ScoreFromArray
        expect(result).toEqual(150);
    });

    test('should score ninety when rolled ten nines and ten zeroes', () => {
        Game.allRolls(9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0)
        let result = Game.ScoreFromArray
        expect(result).toEqual(90);
    });

    test('should score twenty when rolled twenty times', () => {
        Game.allRolls(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
        let result = Game.ScoreFromArray
        expect(result).toEqual(20)
    });

    test('should score zero when rolled twenty times', () => {
        Game.allRolls(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
        let result = Game.ScoreFromArray
        expect(result).toEqual(0)
    });

    test('should create array with all rolls', () => {
        Game.allRolls(1, 2, 3, 4, 5)
        let result = Game.getAllRollsArr()
        expect(result).toEqual([1,2,3,4,5])
    });

    test('should score spare', () => {
        Game.allRolls(5,5,4,0,6,4,3,0,0,6,9,0,0,0,0,0,0,0,0,0)
        let result = Game.ScoreFromArray
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
        let result = Game.ScoreFromArray
        expect(result).toEqual(26)
    });
})


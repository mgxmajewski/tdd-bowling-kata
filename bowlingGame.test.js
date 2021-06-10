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
        roll(2, 5)
        roll(1, 4)
        roll(17, 0)
        let result = Game.getScore()
        expect(result).toEqual(18)
    });
})


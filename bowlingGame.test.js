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
})


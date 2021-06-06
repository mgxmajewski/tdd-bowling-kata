const {BowlingGame} = require('./bowlingGame.js')

describe('BowlingGame', () => {
    let Game
    beforeEach(() => {
        Game = new BowlingGame()
    });

    test('should score one when rolled one', () => {
        let result = Game.getScore()
        expect(result).toEqual(1);
    });
})


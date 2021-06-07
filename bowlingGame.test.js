const {BowlingGame} = require('./bowlingGame.js')

describe('BowlingGame', () => {
    let Game
    beforeEach(() => {
        Game = new BowlingGame()
    });

    test('should score one when no rolls', () => {
        let result = Game.getScore()
        expect(result).toEqual(0);
    });
})


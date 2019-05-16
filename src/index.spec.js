const index = require('./index');

describe('index', () => {
    it(`returns { hello: 'world' }`, () => {
        const result = index();
        expect(result).toEqual({ hello: 'world' });
    });
});

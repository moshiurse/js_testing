const sum = require('./sum');

test('Should add it right!', () => { 
    expect(sum(2,4)).toBe(6);
})

test('Should add it right2!', () => { 
    expect(sum(5,4)).toBe(9);
})

const sub = require('./sub');

test('Should sub it right!', () => { 
    expect(sub(2,4)).toBe(-2);
})

test('Should sub it right2!', () => { 
    expect(sub(5,4)).toBe(1);
})

const clone = require('./clone');

test('Should clone it right!', () => { 
    expect(clone([1,2,3,4,5,6])).not.toBe([1,2,3,4,5,6]);
})

test('Should deep clone the values!', () => { 
    expect(clone([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
})

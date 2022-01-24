let myFunctions = require('./functions.js')
const { TestWatcher } = require('jest')

test('returnTwo gives us 2', () => {
    expect(myFunctions.returnTwo()).toBe(2);
});

test('greeting function greets user', ()=> {
    expect(myFunctions.greeting('James')).toBe('Hello James.');
});

test('greeting function greets Jill', () => {
    expect(myFunctions.greeting('Jill')).toBe('Hello Jill.');
});

test('add the two numbers together', () => {
    expect(myFunctions.add(1, 2)).toBe(3);
});

test('add the two numbers together', () => {
    expect(myFunctions.add(5, 9)).toBe(14);
});

describe('Math functions', () => {
    test('add numbers together', () => {
        expect(myFunctions.add(3, 4)).toBe(7)
    })
    
    test('multiply numbers together', () => {
        expect(myFunctions.multiply(2, 4)).toBe(8)
    })

    test('divide numbers', () => {
        expect(myFunctions.divide(8, 2)).toBe(4)
    })

    test('subtract numbers', () => {
        expect(myFunctions.subtract(10, 7)).toBe(3)
    })
});
const fizzBuzz = require("./fizzBuzz");

test('Si un numero es multiplo 3 nos devuelve Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
});

test('Si un numero es multiplo 5 nos devuelve Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
});

test('Si un numero es multiplo 3 y de 5 nos devuelve FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
});

test('loop from 0 to 100', () => {
    expect(fizzBuzz(1)).toBe(1)
});
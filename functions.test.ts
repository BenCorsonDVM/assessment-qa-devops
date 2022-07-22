const {shuffleArray} = require('./utils')

let newArr = [1, 2]

describe('shuffleArray should', () => {
    test('shuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray([1, 2]))).toEqual(true)
    })
    test('returns an array the same length as the argument', () => {
        expect(shuffleArray([1, 2]).length).toEqual(2)
    })
})
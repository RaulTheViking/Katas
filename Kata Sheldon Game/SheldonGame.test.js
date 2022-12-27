const sheldonGame = require('./SheldonGame.js')


test("Scissors against Scissors is equal to draw", () => {
    expect(sheldonGame("scissors", "scissors")).toBe('Draw')
})
test("Rock against Rock is equal to draw", () => {
    expect(sheldonGame("rock", "rock")).toBe('Draw')
})
test("Paper against Paper is equal to draw", () => {
    expect(sheldonGame("paper", "paper")).toBe('Draw')
})
test("Lagarto against Lagarto is equal to draw", () => {
    expect(sheldonGame("lagarto", "lagarto")).toBe('Draw')
})
test("Spock against Spock is equal to draw", () => {
    expect(sheldonGame("spock", "spock")).toBe('Draw')
})
test("Scissors against paper is equal to Player1", () => {
    expect(sheldonGame("scissors", "paper")).toBe('Player1')
})
test("Paper against scissors is equal to Player2", () => {
    expect(sheldonGame("paper", "scissors")).toBe('Player2')
})
test("Scissors against Spock is equal to Player2", () => {
    expect(sheldonGame("scissors", "spock")).toBe('Player2')
})
test("Spock against scissors is equal to Player1", () => {
    expect(sheldonGame("spock", "scissors")).toBe('Player1')
})
test("Scissors against lagarto is equal to Player1", () => {
    expect(sheldonGame("scissors", "lagarto")).toBe('Player1')
})
test("Lagarto against scissors is equal to Player2", () => {
    expect(sheldonGame("lagarto", "scissors")).toBe('Player2')
})
test("rock against paper is equal to Player2", () => {
    expect(sheldonGame("rock", "paper")).toBe('Player2')
})
test("paper against rock is equal to Player1", () => {
    expect(sheldonGame("paper", "rock")).toBe('Player1')
})
test("Lagarto against rock is equal to Player1", () => {
    expect(sheldonGame("lagarto", "rock")).toBe('Player1')
})
test("Rock against lagarto is equal to Player2", () => {
    expect(sheldonGame("rock", "lagarto")).toBe('Player2')
})
test("Paper against lagarto is equal to Player2", () => {
    expect(sheldonGame("paper", "lagarto")).toBe('Player2')
})
test("Lagarto against Paper is equal to Player1", () => {
    expect(sheldonGame("lagarto", "paper")).toBe('Player1')
})
test("Spock against Paper is equal to Player1", () => {
    expect(sheldonGame("spock", "paper")).toBe('Player2')
})
test("Paper against Spock is equal to Player1", () => {
    expect(sheldonGame("paper", "spock")).toBe('Player1')
})
test("rock against scissors is equal to Player1", () => {
    expect(sheldonGame("rock", "scissors")).toBe('Player1')
})
test("scissors against rock is equal to Player2", () => {
    expect(sheldonGame("scissors", "rock")).toBe("Player2")
})
test("spock against rock is equal to Player1", () => {
    expect(sheldonGame("spock", "rock")).toBe("Player1")
})
test("rock against spock is equal to Player2", () => {
    expect(sheldonGame("rock", "spock")).toBe("Player2")
})
test("Spock against Lagarto is equal to Player2", () => {
    expect(sheldonGame("spock", "lagarto")).toBe('Player2')
})
test("Lagarto against Spock is equal to Player1", () => {
    expect(sheldonGame("lagarto", "spock")).toBe("Player1")
})



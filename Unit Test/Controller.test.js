const { test, expect } = require('@jest/globals')
const functions = require('./src/sass/dummy/Controller')

test("Add bookmark test",()=>{
    let array = ['Pasta','Pizza'];
    expect(functions.addBookmark(array)).toBe('valid')
})

test("Delete bookmark",()=>{
    let array = ['Pasta','Pizza'];
    expect(functions.deleteBookmark(array,'Pizza')).toBe(1)
})

test("Upload recipe",()=>{
    let recipe = 'Chowder'
    expect(functions.uploadRecipe(recipe)).toBe('Chowder')
})

test("Update Servings",()=>{
    let value = 20;
    let fraction = 50
    expect(functions.updateServings(value,fraction)).toBe(40)
})
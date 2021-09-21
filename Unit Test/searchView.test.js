const { test, expect } = require('@jest/globals')
const functions = require('./src/sass/dummy/searchView');

test("Search Test",()=>{
    let recipe = 'Pizza';
    expect(functions.addHandlerSearch(recipe)).toBe(true)
})
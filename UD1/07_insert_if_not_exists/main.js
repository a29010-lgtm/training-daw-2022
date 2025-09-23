const assert = require('assert').strict
let array = ['pera','manzana']

function insertIfNotExists(array, item, position) {
    if(array.includes(item)){
        return (array)
    }else if (!position) {
        return array.push(item)
    }else{
        return array.unshift(item)
    }
}

let result = insertIfNotExists(array, 'pera', false)
assert.deepStrictEqual(result, ['pera', 'manzana'])

result = insertIfNotExists(array, 'melón', false)
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

result = insertIfNotExists(array, 'melocotón', true)
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])


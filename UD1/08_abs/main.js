const assert = require('assert').strict;

function abs(value) {
    if(value < 0) {
        return -value;
    }
    return value;
}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)
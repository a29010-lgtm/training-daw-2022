const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let hour = Math.floor(value / 3600);
    let min = Math.floor((value % 3600) / 60);
    let sec = Math.floor(value % 60)
    return `${hour}:${min}:${sec}`;
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
assert.deepStrictEqual(toHoursMinutesSeconds(7540), "2:5:40")
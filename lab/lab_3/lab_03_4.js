let foo = [3, 7, 9, 11, 84];
let bar = [4, 8, 11];

let fooLength = foo.length;
let barLength = bar.length;
let merged = [];
let fooPosition = barPosition = mergedPosition = 0;

while (fooPosition < fooLength && barPosition < barLength) {
    if (foo[fooPosition] < bar[barPosition]) {
        merged[mergedPosition++] = foo[fooPosition++];
    } else {
        merged[mergedPosition++] = bar[barPosition++];
    }
}
while (fooPosition < fooLength) {
    merged[mergedPosition++] = foo[fooPosition++];
}
while (barPosition < barLength) {
    merged[mergedPosition++] = bar[barPosition++];
}
console.log(merged);
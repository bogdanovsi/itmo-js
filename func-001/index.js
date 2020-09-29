const concat = require('goss_concat');

const intToColor = (n) => (n).toString(16).padStart(2,'0')

const rgb = (r = 255, g = 255, b = 255) => {
    r = Math.min(Math.abs(r), 255);
    g = Math.min(Math.abs(g), 255);
    b = Math.min(Math.abs(b), 255);

    return concat('#', intToColor(r), intToColor(g), intToColor(b));
}
    
console.log(rgb(0, 34, 123));

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// export default rgbToHex;


// console.log(componentToHex('#f15025'));
// console.log(componentToHex(9));
// console.log(rgbToHex(150, 150, 150 ));

// console.log(rgbToHex(15, 15, 150 ));

console.log(null === undefined);
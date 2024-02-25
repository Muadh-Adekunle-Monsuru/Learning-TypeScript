"use strict";
class Shape {
    constructor(shapeName, count) {
        this.sideCount = count;
        this.name = shapeName;
    }
    countSide() {
        console.log('Hi, I am a' + this.name + ' and i have ' + this.sideCount + ' sides');
    }
}
const triangle = new Shape('Hexagon', 5);
triangle.countSide();

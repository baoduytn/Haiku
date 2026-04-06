// main.js
/* document.body.style.opacity = .5;
document.body.style.transform = 'rotate(90deg)';
*/

let rotation = 0;
document.addEventListener("click", function () {
    // let min = 10;
    // let max = 40;
    // rotation += Math.floor(Math.random() * (max - min + 1)) + min;
    rotation += randomNumber(1,200);
    document.body.style.transform = `rotate(${rotation}deg)`;
    });

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

console.log("Hello, World!");

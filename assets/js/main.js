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
let divs = document.querySelectorAll(".grid-container div");
function randomize() {
    console.log(divs.length, "randomize!")
    divs.forEach(function(div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);
        div.style.transform = 
           ' scale(${scale})
            translateX(${translateX}%, ${translateY}%)
            rotate(${rotate}deg)';) 
})

/* let colors = ["purple", "green", "blue"];
colors[randomNumber(0,colors.length-1)]

ElementInternals.forEach(function(ele){
    ele.style.transform = 'rotate(${Math.random() * 360}deg)';
}); */


console.log("Hello, World!");

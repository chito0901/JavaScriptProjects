const num1 = document.getElementById("num-1");
const num2 = document.getElementById("num-2");
const num3 = document.getElementById("num-3");
const num4 = document.getElementById("num-4");
const num5 = document.getElementById("num-5");
const num6 = document.getElementById("num-6");
const num7 = document.getElementById("num-7");
const num8 = document.getElementById("num-8");
const num9 = document.getElementById("num-9");
const num0 = document.getElementById("num-0");
const dcml = document.getElementById("dec-pnt");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const eql = document.getElementById("eql");
let result;

dcml.onclick = function() {
    eqnDisplay.textContent += ".";
    console.log(eqnDisplay);
}
num1.onclick = function() {
    eqnDisplay.textContent += 1;
    console.log(eqnDisplay, typeof eqnDisplay);
}
num2.onclick = function() {
    eqnDisplay.textContent += 2;
    console.log(eqnDisplay);
}
num3.onclick = function() {
    eqnDisplay.textContent+=3;
    console.log(eqnDisplay);
}
num4.onclick = function() {
    eqnDisplay.textContent+=4;
    console.log(eqnDisplay);
}
num5.onclick = function() {
    eqnDisplay.textContent+=5;
    console.log(eqnDisplay);
}
num6.onclick = function() {
    eqnDisplay.textContent+=6;
    console.log(eqnDisplay);
}
num7.onclick = function() {
    eqnDisplay.textContent+=7;
    console.log(eqnDisplay);
}
num8.onclick = function() {
    eqnDisplay.textContent+=8;
    console.log(eqnDisplay);
}
num9.onclick = function() {
    eqnDisplay.textContent+=9;
    console.log(eqnDisplay);
}
num0.onclick = function() {
    eqnDisplay.textContent+=0;
    console.log(eqnDisplay);
}
add.onclick = function() {
    eqnDisplay.textContent+="+";
    console.log(eqnDisplay, typeof eqnDisplay);
}
sub.onclick = function() {
    eqnDisplay.textContent+="-";
    console.log(eqnDisplay);
}
mul.onclick = function() {
    eqnDisplay.textContent+="*";
    console.log(eqnDisplay);
}
div.onclick = function() {
    eqnDisplay.textContent+="/";
    console.log(eqnDisplay);
}
eql.onclick = function() {
    result = eqnDisplay.textContent;
    console.log(eqnDisplay);
}

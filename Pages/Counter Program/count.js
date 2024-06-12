const decreaseCount = document.getElementById("decreaseBtn");
const resetCount = document.getElementById("resetBtn");
const increaseCount = document.getElementById("increaseBtn");
const countLabel = document.getElementById("count-label");
let count = 0;

decreaseCount.onclick = function() {
    count--;
    countLabel.textContent = count;
}
increaseCount.onclick = function() {
    count++;
    countLabel.textContent = count;
}
resetCount .onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
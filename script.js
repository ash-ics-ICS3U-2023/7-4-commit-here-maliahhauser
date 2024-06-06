/**
 * This file will get loaded by index.html
 */

document.getElementById("click_btn").addEventListener("click", click_counter);

let number = 0;

function click_counter(){
    document.getElementById("demo").innerHTML = number = number + 1;
}

document.getElementById("reduce_btn").addEventListener("click", reduce_click);

function reduce_click(){
    document.getElementById("demo").innerHTML = number = number - 1;
}

document.getElementById("reset_btn").addEventListener("click", reset_click);

function reset_click(){
    document.getElementById("demo").innerHTML = number = 0;
}
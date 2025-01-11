"use strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");

function getGoofy() {
  countElement.innerHTML = "BA-<strong>BOOM!!!</strong>";
  incrementBtn.innerHTML = "TO THE MOON";
  decrementBtn.innerHTML = "why are we yelling";
  resetBtn.innerHTML = "RESETTI SPAGHETTI";
}


function incrementCount() {
    // Write the relevant code in this block

}


function decrementCount() {
    // Write the relevant code in this block

}


function resetCount() {
    // Write the relevant code in this block

}

function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", function () {
    // Write code below this line



    // STOP HERE


    renderUpdatedCount();
});

resetBtn.addEventListener("click", function () {
    // Write code below this line


    // STOP HERE


    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function () {
    // Write code below this line


    // STOP HERE


    renderUpdatedCount();
});

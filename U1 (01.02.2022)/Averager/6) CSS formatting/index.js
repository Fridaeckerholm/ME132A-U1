"use strict";

function gridMaker(gridContainer, R, C) {
    gridContainer.style.display = `grid`;
    gridContainer.style.height = `50vh`;
    gridContainer.style.width = `50vh`;
    gridContainer.style.gridTemplateRows = R + "fr";
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

}


document.querySelector("button").addEventListener("click", function() {

    let elementReferens = document.querySelector("#grid");
    let nRows = document.querySelector("#inputRows").value;
    let nCols = document.querySelector("#inputCols").value;

    gridMaker(elementReferens, nRows, nCols);

});


function createNumberDiv() {

    let numberDiv = document.createElement("div");
    numberDiv.innerHTML = randomNumber(100);

    return numberDiv;

}

function gridMaker(gridContainer, R, C) {

    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

    gridContainer.innerHTML = "";

    let nTotal = R * C;
    for (let i = 0; i < nTotal; i++) {
        gridContainer.appendChild(createNumberDiv());
    }

}

function randomNumber(max) {
    return Math.floor(max * Math.random());
}


function createNumberDiv() {

    // Create each numberDiv
    let numberDiv = document.createElement("div");
    numberDiv.innerHTML = randomNumber(100);

    // The eventListener so that it reacts on click
    numberDiv.addEventListener("click", function() {

        // Toggle the selected class
        numberDiv.classList.toggle("selected");

        // Update the results
        updateResults("selected");

    });

    return numberDiv;

}


gridMaker();
/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/
"use strict";

function gridMaker (gridContainer, R, C) {

  gridContainer.style.display ="grid";
  gridContainer.style["gridTemplateRows"] = `repeat(${R}, 1fr)`;
  gridContainer.style["gridTemplateColumns"] = `repeat(${C}, 1fr)`;

  gridContainer.innerHTML = "";

  document.querySelector("#selected span").innerHTML = "";
  document.querySelector("#amount span").innerHTML = "";
  document.querySelector("#sum span").innerHTML = "";
  document.querySelector("#average span").innerHTML = "";

  for ( let i = 0; i < C; i++ ) {
          for ( let ii = 0; ii < R; ii++ ) {
                  gridContainer.appendChild(createNumberDiv ());
  };
  };
}

document.querySelector ("button").addEventListener ("click", function () {
  gridMaker (
      document.querySelector("#grid"),
      document.getElementById ("inputRows").value,
      document.getElementById ("inputCols").value
  )
});

document.onload = gridMaker(document.querySelector("#grid"), 
document.querySelector("#inputRows").value, 
document.querySelector("#inputCols").value);

window.onload = gridMaker(document.querySelector("#grid"),
document.querySelector("#inputRows").value,
document.querySelector("#inputCols").value);



function getArrayOfSelectedNumbers (className) {

  // This weird line creates an array with all the numberDivs that have the 
  // class className. Naturally, when you call this function, you will need 
  // to assign a value to className. What value should that be, do you think?
  // The reference to the array is stored in arrayElements
  let arrayElements = Array.from(document.querySelectorAll("." + className));

  // Create a new array and store its reference in arrayNumbers
  let arrayNumbers = [];

  // Iterate through all the elements in arrayElements.
  // For each numberDiv in arrayElements create a new element in arrayNumbers
  // with the numeric value of the random number.
  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);

  }

  
  // Make the array of numbers available outside the function
  return arrayNumbers;
  
};

function roundString(numberWithManyDecimals, decimals){
  // From: https://stackoverflow.com/a/12698296/2027283
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
}

function createNumberDiv () {
  let divs = document.createElement ("div");
  divs.innerHTML = Math.floor( 99 * Math.random ());
  divs.addEventListener ("click", function () {
  divs.classList.toggle ("selected");

divs.addEventListener ("click", updateResults ("selected"))
});
  return divs;
};

function adder (_array) {
  let sum = 0;
  for (let i = 0 ; i < _array.length ; i++){
    sum = sum +_array[i];
  }
  return sum;
}

  function averg (_arr) {
    let average = adder(_arr) / _arr.length;
    average = roundString(average, 1);
    return average;
  }

function updateResults (className) {


  let array = getArrayOfSelectedNumbers(className);

  let selected = array.join(", ");


  let amount = array.length;
  let sum = adder(array);
  let average = roundString(averg(array), 1);

  document.querySelector("#selected span").innerHTML = selected;
  document.querySelector("#amount span").innerHTML = amount;
  document.querySelector("#sum span").innerHTML = sum;
  document.querySelector("#average span").innerHTML = average;

}

console.log( [1,3,4,10,0,1].join() );
console.log( [1,3,4,10,0,1].join(" - ") );


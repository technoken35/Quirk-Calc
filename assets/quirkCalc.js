var screenDOM, displayOne, operandDOM, clearDOM, btnClick, equalDOM, divisionDOM, additionDOM, subtractionDOM, mutiplicationDOM;

var oneDOM, twoDOM, threeDOM, fourDOM, fiveDOM, sixDOM, sevenDOM, eightDOM, nineDOM, currentINPUT, ongoingInput, deleteDOM, decimalDOM;

/* 
! TODO: Selecting individual value buttons may not be neccessay, with array 

test commit

? Questions


*/

displayOne = "";

screenDOM = document.getElementById("screenText");

btnClick = document.querySelectorAll(".general-btn");

operandDOM = document.querySelectorAll(".operand");

clearDOM = document.getElementById("clear");

deleteDOM = document.getElementById("del");

decimalDOM = document.getElementById("decimal-point");

equalDOM = document.getElementById("equal");

// assigning values to buttons is better
additionDOM = document.getElementById("addition");


var display = [null, null];
// use null for intializing empty arrays for num data type


equalDOM.addEventListener("click", function () {
    // bad practice to use eval, find another function
    screenDOM.textContent = eval(screenDOM.display.value);
});

clearDOM.addEventListener("click", function () {
    screenDOM.textContent = "";
    // clear all other input variables
});


for (i = 0; i < btnClick.length; i++) {
    btnClick[i].addEventListener("click", function () {
        // listens to all number buttons by their common general class
        // var placeholder = String.fromCharCode( this.keyCode);

        //var placeholder= String.fromCharCode( this.keyCode);

        currentINPUT = parseFloat(this.value);
        //  recieves NEW keyCode value on EVERY click

        ongoingInput += currentINPUT;

        display.splice(0, 0, currentINPUT);
        // * * Splices the array to update the first value so "null" does not appear in display screen

        // display[0] += currentINPUT;

        console.log(typeof (display[0]));


        // each new keycode value is turned into the corresponding character value and kept in this var

        screenDOM.textContent += display[0];
        // ALL keycode character values are kept in an on going display string called screenDOM
        // screenDOM= the old screenDOM value + the new character value

    });


}

for (i = 0; i < operandDOM.length; i++) {
    operandDOM[i].addEventListener("click", function () {

        //operandOne = String.fromCharCode(this.keyCode);
        //screenDOM.textContent += operandOne;
        alert("tupac is back");
    });

}

deleteDOM.onclick = function () {
    // 1. Collect current display array value

    // 2. Convert value into string

    // 3. Delete last character from value string

    // 4. Convert string back into number

    // 5. Update UI & Display array value
}

decimalDOM.onclick = function () {
    // 1. Collect current display array value

    // 2. Turn Current Display array value into a floating point decimal

    // 3. add as many decimal place values as there are click input values

    // 4. cap decimal places at certain spot 

    // 5. return variable to ship back to calculator function 
}





//console.log(String.fromCharCode(screenDOM.keyCode));



/*
            ***** BRAINSTORM******


// cycle operands in an object value?

// values will be stored as individual properties in an object
// use boolean value to keep track of state. Keep track of if the second operand was clicked

// collect input display until 99999

// Operand is pressed, Store operand press in a variable

// Store display values in a first value object propert

// clear display

// Start input for second input display variable, collect input until next press

// when second operand is pressed Evaluate Current old input  old input display operand  new input display variable

// store second operand pressed in old operands place

// equal sign take old input variable plus new input variable and evalulate then display


*/





/* 

                                * *SCRAP CODE

oneDOM = document.getElementById("one");

twoDOM = document.getElementById("two");

threeDOM = document.getElementById("three");

fourDOM = document.getElementById("four");

fiveDOM = document.getElementById("five");

sixDOM = document.getElementById("six");

sevenDOM = document.getElementById("seven");

eightDOM = document.getElementById("eight");

nineDOM = document.getElementById("nine");






*/
var displayOne, operandDOM, clearDOM, calcButtons, equalDOM, divisionDOM, additionDOM, subtractionDOM, mutiplicationDOM;

var currentINPUT, ongoingInput, deleteDOM, decimalDOM;

var operandClicked, operand, operand1, inputValues, calculatorRunning;

var grandTotal, operandValue, del,decimal;

operand1 = null;

inputValues = [null, null];
//test array to store variables instead of variable because it is more dynamic


/*
! FIX ME: Add key up & keydown styles to buttons instead of onclick
! Fix Me: Only apply button styles on keydown not on hover
*/

screenDOM = document.getElementById("screenText");

calcButtons = document.querySelectorAll(".general-btn");

operandDOM = document.querySelectorAll(".operand");

clearDOM = document.getElementById("clear");

deleteDOM = document.getElementById("del");

decimalDOM = document.getElementById("decimal-point");

equalDOM = document.getElementById("equal");

additionDOM = document.getElementById("addition");

deleteDOM.onclick = function () {

    del = screenDOM.textContent;
    // collects screen input into variable

    del = del.substring(0, del.length-1);
    // removes last character from string
    
   screenDOM.textContent= del;
    // update UI
}

decimalDOM.onclick = function () {
    
    decimal= parseFloat(screenDOM.textContent);
    // collects current input into variable

    decimal= screenDOM.textContent + ".";
    // adds "decimal point to end" When we parse the string, it convers the "." into a numerical decimal point

    screenDOM.textContent= decimal;
    // update screen input

}

equalDOM.addEventListener("click", function () {

    if (operandClicked && inputValues[0] !== null && inputValues[1] !== null) {
        // if the operand was clicked & both input indexes are full
        // call calculator
        callCalculator();

    }

});

clearDOM.addEventListener("click", function () {
    screenDOM.textContent = "";
    // clear all other input variables
    // reset all state variables

    inputValues[0] = null;
    inputValues[1] = null;

    calculatorRunning = false;
    operandClicked = false;

    currentINPUT = "";
    operand = "";
    operand1 = "";
});

for (i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", function () {
        // listens to all calc number buttons by their shared general class

        currentINPUT = parseFloat(this.value);
        //  recieves NEW value on EVERY click

        ongoingInput += currentINPUT;
        // keeps ongoing input in variable

        screenDOM.textContent += currentINPUT;
        // screenDOM= screenDOM + currentINPUT
        // screenDOM is constantly appended. Adding the new button pressed to it's total
        // screenDOM= old input + new input

        if (operandClicked && inputValues[0] !== null) {
            // after FIRST operand press

            inputValues[1] = parseFloat(screenDOM.textContent);
            // start collecting screenDOM value in second input array index
            console.log("you have reached the second level click in the button listener");
            operand1 = operand;
            // store first operand pressed for execution

        } else {
            // BEFORE operand press
            // if operandClicked is false and the first array[0] is null
            // add screenDOM value to first array[0]
            // program will start here
            inputValues[0] = parseFloat(screenDOM.textContent);

        }

    });

}

for (i = 0; i < operandDOM.length; i++) {
    // listen to all operand buttons
    operandDOM[i].addEventListener("click", function () {

        operandClicked = true;

        // clear dom on every operand press for new input value
        screenDOM.textContent = "";
        currentINPUT = "";

        // if operand is clicked & both input array indexes have values
        if (operandClicked && inputValues[0] !== null && inputValues[1] !== null) {
            // call calculator
            callCalculator();
        }

        operandValue = Number(this.value);
        // collects operand button "value" on every click

        getCalculator();

    });

}

function getCalculator() {
    // depending on value choose what the operand will be
    if (operandValue === 0) {
        operand = "addition";
        return operand;

    } else if (operandValue === 1) {
        operand = "subtraction";
        return operand;
    } else if (operandValue === 2) {
        operand = "multiplication";
        return operand;
    } else if (operandValue === 3) {
        operand = "division"
        return operand;
    }
    // if else statements cycle operand based on button value

    console.log(operand);
    console.log(grandTotal);
}

function callCalculator() {
    // we cycle operand variable in calculator object to call the corresponding function

    grandTotal = calculator[operand1](inputValues[0], inputValues[1]);
    console.log("final calculator call" + " " + "this is the grand total" + " " + grandTotal);

    // array[0] now holds running grand total
    inputValues[0] = grandTotal;
    console.log("array[0] after calculation" + inputValues[0]);
    // clear operand executed
    operand1 = "";
    // clear second array value for new user input
    inputValues[1] = null;

}

calculator = {
    // current function is called depending on the value of the operand button pressed
    addition(value1, value2) {
        testTotal = value1 + value2;
        console.log(testTotal + " " + " in calculator");
        // update screen UI in calculator function
        screenDOM.textContent = testTotal;
        return testTotal;
    },

    subtraction(value1, value2) {
        //takes array[0] & array[1] as arguements
        testTotal = value1 - value2;
        console.log(testTotal + " " + " in calculator");
        screenDOM.textContent = testTotal;
        return testTotal;
    },

    division(value1, value2) {
        testTotal = value1 / value2;
        console.log(testTotal + " " + " in calculator");
        screenDOM.textContent = testTotal;
        return testTotal;
    },

    multiplication(value1, value2) {
        testTotal = value1 * value2;
        console.log(testTotal + " " + " in calculator");
        screenDOM.textContent = testTotal;
        return testTotal;
    }

}

function test() {
    alert("test");
    console.log("test");
}
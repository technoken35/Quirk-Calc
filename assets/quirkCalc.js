var displayOne, operandDOM, clearDOM, calcButtons, equalDOM, divisionDOM, additionDOM, subtractionDOM, mutiplicationDOM;

var oneDOM, twoDOM, threeDOM, fourDOM, fiveDOM, sixDOM, sevenDOM, eightDOM, nineDOM, currentINPUT, ongoingInput, deleteDOM, decimalDOM;

var operandClicked, operand, testTotal, testing123, testing1234, waitingForSecondOperandPress, operand1, testArray, calculatorRunning;

var testGrandTotal,operandValue;

operand1 = null;

testArray = [null, null];
//test array to store variables instead of variable because it is more dynamic


/*
! FIX ME: Add key up & keydown styles to buttons instead of onclick
TODO: Organize code into functions
*/

screenDOM = document.getElementById("screenText");

calcButtons = document.querySelectorAll(".general-btn");

operandDOM = document.querySelectorAll(".operand");

clearDOM = document.getElementById("clear");

deleteDOM = document.getElementById("del");

decimalDOM = document.getElementById("decimal-point");

equalDOM = document.getElementById("equal");

// assigning values to buttons is better
additionDOM = document.getElementById("addition");

var display = [null, null];

var calcScreenTotal = [null];
// use null for intializing empty arrays for num data type

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

equalDOM.addEventListener("click", function () {

    if (operandClicked && testArray[0] !== null && testArray[1] !== null) {
        // call calculator
        callCalculator();

    }

});

clearDOM.addEventListener("click", function () {
    screenDOM.textContent = "";
    // clear all other input variables
    // reset all state variables

    testArray[0]= null;
    testArray[1]= null;
    
    calculatorRunning=false;
    operandClicked=false;
    
    currentINPUT=""; 
    operand="";
    operand1="";
});

for (i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", function () {
        // listens to all calc number buttons by their shared general class

        currentINPUT = parseFloat(this.value);
        //  recieves NEW value on EVERY click

        ongoingInput += currentINPUT;
        // keeps ongoing input in variable

        screenDOM.textContent += currentINPUT;
        // screenDOM is constantly appended. Adding the new button pressed to it's total

        if (operandClicked && testArray[0] !== null) {
            // instructions after FIRST operand press

            testArray[1] = Number(screenDOM.textContent);
            // start collecting screenDOM value in second index
            console.log("you have reached the second level click in the button listener");
            operand1 = operand;
            // store first operand pressed for execution

        } else {
            // if operandClicked is false and the first array[0] is null
            // add screenDOM value to first array[0]
            // program will start here
            testArray[0] = Number(screenDOM.textContent);

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
        
        // if operand clicked is true & all test arrays have values
        if (operandClicked && testArray[0] !== null && testArray[1] !== null) {
            // call calculator

            callCalculator();
           
        } else if (calculatorRunning && testArray[0] !== null) {
            // calculator is now running, there is a computed value in grand total
            // this is the third operand press
            testArray[1] = Number(screenDOM.textContent);
            console.log("this is what you are trying to clarify" + " " + testArray[1]);
        }

         operandValue = Number(this.value);
        // collects operand button "value"

        // depending on value choose what the operand will be
        if (operandValue === 0) {
            operand = "addition";
            console.log("hi" + " " + operand);
            return operand;

        } else if (operandValue === 1) {
            operand = "subtraction";
            return operand;
        } else if (operandValue === 2) {
            operand = "multiplication";
            return operand;
        } else if (operandValue === 3) {
            operand = "division"
            console.log("ho");
            return operand;
        }
        // if else statements cycle operand based on button value

        console.log(operand);
        console.log(testGrandTotal);

    });

}

function callCalculator () {
    
    testGrandTotal = calculator[operand1](testArray[0], testArray[1]);
    console.log("final calculator call" + " " + "this is the grand total" + " " + testGrandTotal);

    // array[0] now holds grand total
    testArray[0] = testGrandTotal;
    console.log("array[0] after calculation" + testArray[0]);
    // clear operand executed
    operand1 = "";
    // clear second array value for new input
    testArray[1] = null;

    // we cycle operand variable in calculator object to call the corresponding function

    // state variable to clarify that calculator is running
    calculatorRunning = true;
}

calculator = {
    // current function is called depending on the value of the operand button pressed
    addition(value1, value2) {
        testTotal = value1 + value2;
        console.log(testTotal + " " + " in calculator");
        // update screen UI in calculator function?
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

function firstOperandPress() {

    console.log("this is the first operand press");

   
}

function test() {
    alert("test");
    console.log("test");
}
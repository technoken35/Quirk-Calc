var displayOne, operandDOM, clearDOM, btnClick, equalDOM, divisionDOM, additionDOM, subtractionDOM, mutiplicationDOM;

var oneDOM, twoDOM, threeDOM, fourDOM, fiveDOM, sixDOM, sevenDOM, eightDOM, nineDOM, currentINPUT, ongoingInput, deleteDOM, decimalDOM;

var operandClicked, operand, testTotal, testing123, testing1234, waitingForSecondOperandPress, operand1, testArray,calculatorRunning;

operand1 = null;

testArray = [null, null];
//test array to store variables instead of variable because it is more dynamic


/* 
? need a way to let program know there has been two clicks
if arrays are both equal
test commit
? Questions

! FIX ME: Stop the first operand press from triggering the second

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
    // if equals is pressed

    // master expression is made up of arrays and operands

    // evaluate master expression

    // Store master expression to a variable

    // Update UI with result 

    // Clear expression string with computed numbers

    // add new value to expression string

});

clearDOM.addEventListener("click", function () {
    screenDOM.textContent = "";
    // clear all other input variables
});

for (i = 0; i < btnClick.length; i++) {
    btnClick[i].addEventListener("click", function () {
        // listens to all number buttons by their common general class

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
            operand1=operand;
            // store first operand pressed for execution

        } else {
            // if operandClicked is false and the first array[0] is null
            // add screenDOM value to first array[0]
            testArray[0] = Number(screenDOM.textContent);

        }

    });

}

for (i = 0; i < operandDOM.length; i++) {
    // listen to all operand buttons
    operandDOM[i].addEventListener("click", function () {
            
            firstOperandPress();
        // if operand clicked is true & all test arrays have values
        if (operandClicked && testArray[0] !== null && testArray[1] !== null) {
            // call calculator
            console.log("This is the calculator call");
            var testGrandTotal = calculator[operand1](testArray[0],testArray[1]);
            console.log("final calculator call"+ " " + "this is the grand total" + " " + testGrandTotal);

            // array[0] now holds grand total
            testArray[0] = testGrandTotal;
            console.log("array[0] after calculation" + testArray[0]);
            // clear operand
            operand1="";
            // clear second array value
            testArray[1]= null;

        // we cycle operand variable in calculator object to call the corresponding function

        // state variable to clarify that calculator is running
            calculatorRunning=true;
        } else if(calculatorRunning && testArray[0] !==null) {
                testArray[1] = Number(screenDOM.textContent);
                console.log("after second calculator is running" + " " + testArray[1]);
        }


        var operandValue = Number(this.value);
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

calculator = {
    // current function is called depending on the value of the operand button pressed
    addition(value1,value2) {
        testTotal= value1 + value2;
        console.log(testTotal + " " + " in calculator");
        return testTotal;
        // this works
    },

    subtraction(value1, value2) {
        //takes array[0] & array[1] as arguements
        testTotal = value1 - value2;
        console.log(testTotal + " " + " in calculator");
        return testTotal;
    },

    division(value1,value2) {
        testTotal = value1 / value2;
        console.log(testTotal + " " + " in calculator");
        return testTotal;
    },

    multiplication(value1,value2) {
        testTotal = value1 * value2;
        console.log(testTotal + " " + " in calculator");
        return testTotal;
    }


}

function firstOperandPress() {

    console.log("here is the" + " " + operand + " " + "you requested" + " " + "it will probaly be undefined");

    console.log("this is the first operand press");

    // operand clicked true
    operandClicked = true;
    // clear dom
    screenDOM.textContent = "";
    currentINPUT = "";
    //waitingForSecondOperandPress=true;

}


function test () {
    alert("test");
    console.log("test");
}
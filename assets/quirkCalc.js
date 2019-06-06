var displayOne, operandDOM, clearDOM, btnClick, equalDOM, divisionDOM, additionDOM, subtractionDOM, mutiplicationDOM;

var oneDOM, twoDOM, threeDOM, fourDOM, fiveDOM, sixDOM, sevenDOM, eightDOM, nineDOM, currentINPUT, ongoingInput, deleteDOM, decimalDOM;

var operandClicked, operand, testTotal,testing123,testing1234,waitingForSecondOperandPress,operand1,testArray;

operand1=null;

testArray=[null,null];
//test array to store variables instead of variable because it is more dynamic



/* 
! TODO: Selecting individual value buttons may not be neccessay, with array 
? need a way to let program know there has been two clicks
if arrays are both equal
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

        display.splice(0, 0, currentINPUT);
        // * * Splices the array to update the first value of so "null" does not appear in display screen


        screenDOM.textContent += currentINPUT

    
       

    });


}

for (i = 0; i < operandDOM.length; i++) {
    operandDOM[i].addEventListener("click", function () {
       

        if(testArray[0]===null) {
            //collect input in first operand
            firstOperandPress();
            //first operand clicked is true
        }

        secondOperandPress();


        var operandValue = Number(this.value);
        // collects operand button "value"


        // depending on value choose what the operand will be
        if (operandValue === 0) {
            operand = "addition";
            console.log("hi");

        } else if (operandValue === 1) {
            operand = "subtraction";
        } else if (operandValue === 2) {
            operand = "multiplication";
        } else if (operandValue === 3) {
            operand = "division"
            console.log("ho");
        }
        
        operand1=operand;

        // if else statements cycle operand based on button value

        var testGrandTotal = calculator[operand]();
        // we cycle operand variable in calculator object to call the corresponding function


        console.log(operand);
        console.log(testGrandTotal);

    });

}

calculator = {
    addition() {
        testTotal = 5 + 5;
        return testTotal;
    },

    subtraction() {
        testTotal = 5 - 5;
        return testTotal;
    },

    division() {
        testTotal = 10 / 5;
        return testTotal;
    },

    multiplication() {
        testTotal = 5 * 5;
        return testTotal;
    }


}

function firstOperandPress() {


    alert("my name is freddy");

    testing123 = Number(screenDOM.textContent);

    testArray[0]=Number(screenDOM.textContent);
    console.log(testArray[0] + " " + "test array");

    // operand clicked true
    operandClicked = true;
    // clear dom
    screenDOM.textContent = "";
    currentINPUT = "";
    //cycle to array [1]

    waitingForSecondOperandPress=true;
    
}

function secondOperandPress () {
    if (waitingForSecondOperandPress ===true && testArray[0] !==null) {
        console.log("youve reached the second operand click");
        
        testing1234 = Number(currentINPUT);
        console.log(testing1234);

        // may need to add function to button listener, so that the first operand press does not trigger the rest
        

    }

    
}




var displayOne, operandDOM, clearDOM, btnClick, equalDOM, divisionDOM, additionDOM, subtractionDOM, mutiplicationDOM;

var oneDOM, twoDOM, threeDOM, fourDOM, fiveDOM, sixDOM, sevenDOM, eightDOM, nineDOM, currentINPUT, ongoingInput, deleteDOM, decimalDOM;

var operandClicked, operand,testTotal,numberClicked;

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


var displayValue = [null, null];

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

        numberClicked=true;

        currentINPUT = parseFloat(this.value);
        //  recieves NEW value on EVERY click

        ongoingInput += currentINPUT;

        displayValue.splice(0, 0, currentINPUT);
        // * * Splices the array to update the first value of so "null" does not appear in display screen

        // display[0] += currentINPUT;

        if (operandClicked && displayValue[0] !== null) {
            // cycle to array [1]

            // clear input
            alert("hello");
        } else {
            // everything else

            // array [0] is current input value

            // place logic before operand click in here
        }

       
        console.log(typeof (displayValue[0]));

       // displayValue[0] +=currentINPUT
        screenDOM.textContent += currentINPUT;
        // screenDOM is collection on the ongoing user input
        
        displayValue[0] = Number(screenDOM.textContent);
        // displayValue[0] is set to the entire total
    

        console.log(displayValue[0] + "display[0]");
        console.log(Number(screenDOM.textContent));
        // screenDOM= the old screenDOM value + the new character value

    });


}

for (i = 0; i < operandDOM.length; i++) {
    operandDOM[i].addEventListener("click", function () {

        displayValue[0]= Number(screenDOM.textContent);
        // collects screen value in array variable once first operand is clicked
       // console.log(displayValue[0]);

        var operandValue= Number(this.value);
        // collects operand button "value"

        operandClicked= true;
        // state variable for operand

      /*  if(operandClicked && displayValue[0] !==null) {
            / cycle to array[1]
            alert("hello");
            displayValue[1] = Number(screenDOM.textContent);
            console.log(displayValue[1]);
        
        }  */


        if (operandClicked && displayValue[0] !== null && displayValue[1] !==null) {
            // if both display index values are used and operand clicked execute statement

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

        // if else statements cycle operand based on button value
       
        }

        

      var testGrandTotal=  calculator[operand]();
      // we cycle operand variable in calculator object to call the corresponding function
      // store total of function in variable

        console.log(operand);
        console.log(testGrandTotal);
    

    });

}

calculator= {
    addition () {
        testTotal=5+5;
        return testTotal;
        // testTotal = displayValue[0] + displayValue[1]
    },
    
    subtraction () {
        testTotal=5-5;
        return testTotal;
    },

    division () {
        testTotal= 10/5;
        return testTotal;
    },

    multiplication () {
        testTotal=5*5;
        return testTotal;
    }



}

var testArray= [12,34,90];





        // on each click before multiple values update the operand variable with appropriate value of each click
        // if operand matches addition than array[0] + array [1]

        // Cycle to next array[1] value

        // When user clicks another value button Clear Screen Display Variable, Add new value clicked to array [1]

        // Clear UI screen

        // Display new array[1] value to screen

     //second click

        //else if another operand pressed && array [1] > 0 

                // Evaluate expression

                // store ongoing value in array [0]



                // update display with array [0]

                // store second operand pressed

                // collect screen input value in array [1]

                // evaluate current expression based on operand

                // clear operand one

                // Update display variable and UI

                // Clear array [1]

                // set array [1] to new input

                // run in this mode cycling the operands until equals is pressed

                // clear both operand & array variable

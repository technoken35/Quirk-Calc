var  screenDOM, displayOne, operandDOM, clearDOM, btnClick, equalDOM, divisionDOM, additionDOM, subtractionDOM, mutiplicationDOM;

var oneDOM, twoDOM, threeDOM, fourDOM, fiveDOM, sixDOM, sevenDOM, eightDOM, nineDOM, currentINPUT,ongoingInput;


displayOne = "";

screenDOM = document.getElementById("screenText");

btnClick = document.querySelectorAll(".general-btn");

operandDOM = document.querySelectorAll(".operand");

clearDOM = document.getElementById("clear");

equalDOM = document.getElementById("equal");

// assign keyCodes based on element ID
additionDOM =document.getElementById("addition");
additionDOM.keyCode= 61;

oneDOM=document.getElementById("one");
oneDOM.keyCode= 49;

twoDOM = document.getElementById("two");
twoDOM.keyCode= 50;

threeDOM = document.getElementById("three");
threeDOM.keyCode=51;

fourDOM = document.getElementById("four");
fourDOM.keyCode= 52;

fiveDOM = document.getElementById("five");
fiveDOM.keyCode=53;

sixDOM = document.getElementById("six");
sixDOM.keyCode=54;

sevenDOM = document.getElementById("seven");
//sevenDOM.keyCode=55;

eightDOM = document.getElementById("eight");
eightDOM.keyCode=56;

nineDOM = document.getElementById("nine");
nineDOM.keyCode=57;

var display =[null,null];
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
         
         ongoingInput +=currentINPUT;

         display.splice(0,0,currentINPUT);
        
       // display[0] += currentINPUT;

        console.log(typeof(display[0]));
        

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
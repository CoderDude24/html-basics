/*
Temperature Converter
Write a function that converts Celsius to Fahrenheit.
Input: 25 → Output: 77°F.
Formula: (33°C × 9/5) + 32 = 91.4°F
*/


let res = document.getElementById('res');
let temp = document.getElementById('num');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');

function convertTemperature(temp){
    const value = Number(temp.value);

    let convertedTemp = (value * 9/5) + 32;
    console.log('Converted: '+convertedTemp);
    
    res.textContent = "Farenheit: "+convertedTemp+ "°F";
    res.clear;
    return convertedTemp;
}
// Take two numbers and an operator (+, -, *, /) and return the result.
function calculator(){
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);

    
}
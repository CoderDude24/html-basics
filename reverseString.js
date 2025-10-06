
let res = document.getElementById('res');

function reverseString(){
    let userInput = document.getElementById('rev');
    const value = String(userInput.value);
    console.log(value);

    let reverseString = value.split("");
    console.log(reverseString);

    let rstring = "";

    for(let i = reverseString.length - 1; i >= 0; i--){
        console.log(reverseString[i]);

        rstring = rstring + reverseString[i];
        // res.textContent = reverseString[i];
    }

    res.textContent = rstring;
}
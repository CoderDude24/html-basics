console.log(a);

var a;


// Temporal Deadzone in Javascript is a phase from where let & const are declared till any value is assigned/ initialized to those variable is known as temporal deadzone.

// It is the time period between when a variable is hoisted and when it is initialized. 

// During this period, you cannot access the variable, It will throw `ReferenceError.

const username = "arthvala@15";
const password = "Arthvala15";

// password = 'NewArthpassword';

console.log(
    {
        'username': username,
        'password': password
    }
)

setTimeout(function () {
    console.log("Hello from Timer")
}, 3000)
function a(b) {
    console.log("Hello from A")
    b()
}

a(function b() {
    console.log("Hello from B")
})

function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function saybye() {
    console.log("Good bye");
}

greet("Arth", saybye)

function attachEventListener() {
    let count = 0;

    document.getElementById('click').addEventListener('click', function xyz() {
        console.log("Hello from Click", ++count)

    })
}

attachEventListener()

async function generateUsername(){

    let uname = prompt("Enter Username: ");

    uname = await new uname.trim().toString().toLowerCase();

    console.log(uname);
}
generateUsername()
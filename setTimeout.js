
console.log("Start");

function first(){
    setTimeout(()=> {
        console.log("Hello from First");
    }, 3000);
}

function second(){
    setTimeout(()=> {
        console.log("Hello from Second");
    }, 5000);
}


first()
second()

console.log("End");

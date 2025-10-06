
const arr = [4, 3, 6, 1];

// Double the Array Val using map()
const output = arr.map(double);
const output2 = arr.map(triple);
const op3 = arr.map(binary);

function double(arr){
    return arr * 2;
}

// Triple the Array val using Map()
function triple(arr){
    return arr * 3;
}

function binary(arr){
    return arr.toString(2);
}

console.log(output);
console.log(output2);
console.log(op3);


// Filter Function
function isOdd(arr){
    return arr % 2;
}

function isEven(arr){
    return arr % 2 === 0;
}

const greaterThan4 = arr.filter((arr) => {
    return arr > 4;
})

console.log(arr.filter(isOdd));
console.log(arr.filter(isEven));
console.log(greaterThan4);

// Reduce Method
const sumval = arr.reduce(function findSum(acc, curr){
    acc = acc + curr;

    return acc
}, 0) 

console.log(sumval)

// Find Max Val
const findmax = arr.reduce(function findMax(acc, cur){
    if(cur > acc){
        acc = cur;
    }    
    return cur;
}, 0)

console.log(findmax)

// get full name
const users = [
    {'fname': "Arth", 'lname': "Vala", 'age': 20},
    {'fname': "Raj", 'lname': "pedd", 'age': 20},
    {'fname': "Kher", 'lname': "lali", 'age': 25},
    {'fname': "Siss", 'lname': "Kamme", 'age': 29},
    {'fname': "Raulf", 'lname': "Jam", 'age': 21},
];

const fullname = users.map( (name) => name.fname +" "+name.lname)
console.log(fullname)

const getd = users.reduce(function getds(acc, cur){
    if(acc[cur.age]){
        acc[cur.age] += 1;
    }else{
        acc[cur.age] = 1;
    }
    return acc;
}, {})

console.log(getd);

// Find people whose age is less than 30
const age = users.filter((x) => x.age < 30).map((x) => x.fname)

console.log(age)
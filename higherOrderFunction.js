 
const radius = [2,3,5,4];

const calculateArea = function (radius) {
    const res = [];
    for(let i = 0; i < radius.length; i++){
        res.push(Math.PI * radius[i] * radius[i]);
    }
    return res
}

// console.log(calculateArea(radius))

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function (radius){
    return 2 * Math.PI * radius;
}

const calculateArea2 = function (radius, logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }

    return output;
}

console.log(calculateArea2(radius, area))
console.log(calculateArea2(radius, circumference))
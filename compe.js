'use-strict'

const MIN_SCORE = 100;
const dolphinScores = [97, 112, 101];
const koalaScores = [109, 95, 12];


function calculateAverage() {
    let dolphinAvg = (dolphinScores[0] + dolphinScores[1] + dolphinScores[2]) / dolphinScores.length;
    let koalaAvg = (koalaScores[0] + koalaScores[1] + koalaScores[2]) / koalaScores.length;

    console.log(dolphinAvg);
    console.log(koalaAvg);

    if (dolphinAvg < MIN_SCORE && koalaAvg < MIN_SCORE) {
        console.log("Both Average is below 100%");
    }
    else if (dolphinAvg > MIN_SCORE || koalaAvg > MIN_SCORE) {
        console.log("More than 100.");
        if (dolphinAvg > koalaAvg) {
            console.log("Dolphin Team is the winner.");
        }
        else if (koalaAvg > dolphinAvg) {
            console.log("Koala Team is the winner.");
        }
        else {
            console.log("There is a draw in the game");
        }
    }
    }


console.log(dolphinScores.length);
console.log(koalaScores.length);

calculateAverage();

    e
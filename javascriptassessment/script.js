const output = document.getElementById('output');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Utility to simulate a task with success/failure
function simulateTask(taskName, duration = 2000, failProbability = 0.2) {
  return new Promise((resolve, reject) => {
    appendMessage(` Starting ${taskName}...`);
    setTimeout(() => {
      const didFail = Math.random() < failProbability;
      if (didFail) {
        reject(`${taskName} failed!`);
      } else {
        resolve(`${taskName} completed successfully.`);
      }
    }, duration);
  });
}

// Task functions
function prepareBreakfast() {
  return simulateTask(' Preparing breakfast', 3000);
}

function washDishes() {
  return simulateTask(' Washing dishes', 2000);
}

function makeCoffee() {
  return simulateTask(' Making coffee', 1500);
}

// Append message to output box
function appendMessage(message, isError = false) {
  const p = document.createElement('p');
  p.textContent = message;
  p.className = isError ? 'error' : 'success';
  output.appendChild(p);
}

// Clear output
function clearOutput() {
  output.innerHTML = '';
}

// Routine
async function startKitchenRoutine() {
  clearOutput();
  try {
    const breakfastMsg = await prepareBreakfast();
    appendMessage(` ${breakfastMsg}`);

    const dishesMsg = await washDishes();
    appendMessage(` ${dishesMsg}`);

    const coffeeMsg = await makeCoffee();
    appendMessage(` ${coffeeMsg}`);

    appendMessage(" All tasks completed!");
  } catch (error) {
    appendMessage(` ${error}`, true);
  }
}

// Event listeners
startBtn.addEventListener('click', startKitchenRoutine);
resetBtn.addEventListener('click', clearOutput);

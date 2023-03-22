import readlineSync from 'readline-sync';

// Setting maximum possible number for the game
const maxNum = 100;
// Setting array of possible math operators for the game
const actions = ['-', '+', '*'];
// Generate rnd num in range from 0 to max
const rndNum = () => Math.floor(Math.random() * maxNum);
// Get random value from an array
const rndFromArray = (array) => array[Math.floor(Math.random() * (array.length - 1))];
// Getting the right answer
const getRightAnswer = (num1, num2, actionString, actionsArray) => {
  switch (actionString) {
    case actionsArray[0]: return num1 - num2;
    case actionsArray[1]: return num1 + num2;
    case actionsArray[2]: return num1 * num2;
    default: return false;
  }
  // А если бы можно было исользовать eval(`${num1} ${action} ${num2}`);
  // получилось бы универсально :(
};
// Getting user input
const getUserInput = (num1, num2, action) => readlineSync.question(`What is the result of the expression? \nQuestion: ${num1} ${action} ${num2} \nYour answer: `);
// Checking if user input is right
const checkUserInput = (input, answer) => parseInt(input, 10) === parseInt(answer, 10);
// The game
export default (name) => {
  const rndNum1 = rndNum();
  const rndNum2 = rndNum();
  const action = rndFromArray(actions);
  const rightAnswer = getRightAnswer(rndNum1, rndNum2, action, actions);
  const userInput = getUserInput(rndNum1, rndNum2, action);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    return false;
  }
  return true;
};

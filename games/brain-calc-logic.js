import readlineSync from 'readline-sync';
import { gameAnswer, rndNum } from './common-logic.js';
// Setting minimum possible number for the game
const minNum = 0;
// Setting maximum possible number for the game
const maxNum = 100;
// Setting array of possible math operators for the game
const actions = ['-', '+', '*'];
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
  const rndNum1 = rndNum(minNum, maxNum);
  const rndNum2 = rndNum(minNum, maxNum);
  const action = rndFromArray(actions);
  const rightAnswer = getRightAnswer(rndNum1, rndNum2, action, actions);
  const userInput = getUserInput(rndNum1, rndNum2, action);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

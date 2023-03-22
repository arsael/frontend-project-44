import readlineSync from 'readline-sync';
import { gameAnswer, rndNum } from './common-logic.js';
// Setting minimum possible number for the game
const minNum = 1;
// Setting maximum possible number for the game minus minimum number
const maxNum = 100;
// Getting the right answer
const getRightAnswer = (num1, num2) => {
  let answer = 0;
  for (let i = 1; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      answer = i;
    }
  }
  return answer;
};
// Getting user input
const getUserInput = (num1, num2) => readlineSync.question(`Find the greatest common divisor of given numbers. \nQuestion: ${num1} ${num2} \nYour answer: `);
// Checking if user input is right
const checkUserInput = (input, answer) => parseInt(input, 10) === parseInt(answer, 10);
// The game
export default (name) => {
  const rndNum1 = rndNum(minNum, maxNum);
  const rndNum2 = rndNum(minNum, maxNum);
  const rightAnswer = getRightAnswer(rndNum1, rndNum2);
  const userInput = getUserInput(rndNum1, rndNum2);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

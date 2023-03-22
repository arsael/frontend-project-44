import readlineSync from 'readline-sync';
import { gameAnswer, rndNum } from './common-logic.js';
// Setting minimum possible number for the game
const minNum = 1;
// Setting maximum possible number for the game minus minimum number
const maxNum = 100;
// Getting the right answer
const getRightAnswer = (num) => {
  let k = 0;
  let answer;
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      k += 1;
    }
  }
  if (k === 1) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};
// Getting user input
const getUserInput = (num) => readlineSync.question(`Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${num} \nYour answer: `);
// Checking if user input is right
const checkUserInput = (input, answer) => input.toString() === answer.toString();
// The game
export default (name) => {
  const rndNum1 = rndNum(minNum, maxNum);
  const rightAnswer = getRightAnswer(rndNum1);
  const userInput = getUserInput(rndNum1);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

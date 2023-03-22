import readlineSync from 'readline-sync';
import { gameAnswer, rndNum } from './common-logic.js';
// Setting minimum possible number for the game
const minNum = 0;
// Setting maximum possible number for the game
const maxNum = 100;
// Checking if number is even
const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// Getting user input
const yesOrNo = (number) => readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no". \nQuestion: ${number} \nYour answer: `);
// Checking if user input is right
const checkUserInput = (input, isEven) => input === isEven;
// The game
export default (name) => {
  const rndNum1 = rndNum(minNum, maxNum);
  const rightAnswer = checkIsEven(rndNum1);
  const userInput = yesOrNo(rndNum1);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

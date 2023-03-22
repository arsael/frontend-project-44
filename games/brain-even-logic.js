import { gameAnswer, getUserInput, rndNum } from './common-logic.js';
// Setting game name
const game = 'brain-even';
// Setting minimum possible number for the game
const minNum = 0;
// Setting maximum possible number for the game
const maxNum = 100;
// Checking if number is even
const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// Checking if user input is right
const checkUserInput = (input, isEven) => input === isEven;
// The game
export default (name) => {
  const rndNum1 = rndNum(minNum, maxNum);
  const rightAnswer = checkIsEven(rndNum1);
  const userInput = getUserInput(game, rndNum1, undefined, undefined, undefined);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

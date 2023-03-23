import { gameAnswer, getUserInput, randomContent } from './common-logic.js';
// Game settings
const gameSettings = [
  0, // min number
  100, // max number
  0, // min progression step — 0 if no progression
  0, // max progression step — 0 if no progression
  0, // min progression length — 0 if no progression
  0, // max progression length — 0 if no progression
  ['-', '+', '*'], // array of possible actions — [] if no actions
  'brain-calc', // game name
];
// Getting the right answer
const getRightAnswer = (num1, num2, actionString, actionsArray) => {
  switch (actionString) {
    case actionsArray[0]: return num1 - num2;
    case actionsArray[1]: return num1 + num2;
    case actionsArray[2]: return num1 * num2;
    default: return false;
  }
};
// Checking if user input is right
const checkUserInput = (input, answer) => parseInt(input, 10) === parseInt(answer, 10);
// The game
export default (name) => {
  const content = randomContent(gameSettings);
  const rightAnswer = getRightAnswer(content[0], content[1], content[7], gameSettings[6]);
  const userInput = getUserInput(gameSettings[7], content[0], content[1], content[7], undefined);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

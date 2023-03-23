import { gameAnswer, getUserInput, randomContent } from './common-logic.js';
// Game settings
const gameSettings = [
  0, // min number
  100, // max number
  0, // min progression step — 0 if no progression
  0, // max progression step — 0 if no progression
  0, // min progression length — 0 if no progression
  0, // max progression length — 0 if no progression
  [], // array of possible actions — [] if no actions
  'brain-even', // game name
];
// Checking if number is even
const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// Checking if user input is right
const checkUserInput = (input, isEven) => input === isEven;
// The game
export default (name) => {
  const content = randomContent(gameSettings);
  const rightAnswer = checkIsEven(content[0]);
  const userInput = getUserInput(gameSettings[7], content[0], undefined, undefined, undefined);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

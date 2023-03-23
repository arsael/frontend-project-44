import { gameAnswer, getUserInput, randomContent } from './common-logic.js';
// Game settings
const gameSettings = [
  1, // min number
  100, // max number
  1, // min progression step — 0 if no progression
  5, // max progression step — 0 if no progression
  5, // min progression length — 0 if no progression
  10, // max progression length — 0 if no progression
  [], // array of possible actions — [] if no actions
  'brain-progression', // game name
];
// Generate rnd array in range from minNum to maxNum inclusive
// Getting the right answer
const getRightAnswer = (num, array) => array[num];
// Checking if user input is right
const checkUserInput = (input, answer) => parseInt(input, 10) === parseInt(answer, 10);
// The game
export default (name) => {
  const content = randomContent(gameSettings);
  const rightAnswer = getRightAnswer(content[4], content[5]);
  const userInput = getUserInput(gameSettings[7], undefined, undefined, undefined, content[6]);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

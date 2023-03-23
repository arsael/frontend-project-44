import { gameAnswer, getUserInput, randomContent } from './common-logic.js';
// Game settings
const gameSettings = [
  1, // min number
  100, // max number
  0, // min progression step — 0 if no progression
  0, // max progression step — 0 if no progression
  0, // min progression length — 0 if no progression
  0, // max progression length — 0 if no progression
  [], // array of possible actions — [] if no actions
  'brain-gcd', // game name
];
const getRightAnswer = (num1, num2) => {
  let answer = 0;
  for (let i = 1; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      answer = i;
    }
  }
  return answer;
};
// Checking if user input is right
const checkUserInput = (input, answer) => parseInt(input, 10) === parseInt(answer, 10);
// The game
export default (name) => {
  const content = randomContent(gameSettings);
  const rightAnswer = getRightAnswer(content[0], content[1]);
  const userInput = getUserInput(gameSettings[7], content[0], content[1], undefined, undefined);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

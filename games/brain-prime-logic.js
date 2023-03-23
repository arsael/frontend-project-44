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
  'brain-prime', // game name
];
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
// Checking if user input is right
const checkUserInput = (input, answer) => input.toString() === answer.toString();
// The game
export default (name) => {
  const content = randomContent(gameSettings);
  const rightAnswer = getRightAnswer(content[0]);
  const userInput = getUserInput(gameSettings[7], content[0], undefined, undefined, undefined);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  return gameAnswer(isCorrect, userInput, rightAnswer, name);
};

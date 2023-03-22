import readlineSync from 'readline-sync';
// Setting minimum possible number for the game
const minNum = 1;
// Setting maximum possible number for the game minus minimum number
const maxNum = 100;
// Setting minimum possible length for a progression
const minLength = 5;
// Setting maximum possible length for a progression
const maxLength = 10;
// Setting minimum possible step for a progression
const minStep = 1;
// Setting maximum possible step for a progression
const maxStep = 5;
// Generate rnd num in range from minNum to maxNum inclusive
const rndNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// Generate rnd array in range from minNum to maxNum inclusive
const rndArray = (start, step, length) => {
  const progression = [];
  let from = start;
  for (let i = 0; i <= length; i += 1) {
    progression.push(from + step);
    from += step;
  }
  return progression;
};
// Getting the right answer
const getRightAnswer = (num, array) => array[num];
// Getting user input
const getUserInput = (array) => readlineSync.question(`What number is missing in the progression? \nQuestion: ${array.join(' ')} \nYour answer: `);
// Checking if user input is right
const checkUserInput = (input, answer) => parseInt(input, 10) === parseInt(answer, 10);
// The game
export default (name) => {
  const progStart = rndNum(minNum, maxNum);
  const progStep = rndNum(minStep, maxStep);
  const progLength = rndNum(minLength, maxLength);
  const progPos = rndNum(0, progLength);
  const progItSelf = rndArray(progStart, progStep, progLength);
  const rightAnswer = getRightAnswer(progPos, progItSelf);
  const progForGame = [...progItSelf];
  progForGame[progPos] = '..';
  const userInput = getUserInput(progForGame);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    return false;
  }
  return true;
};

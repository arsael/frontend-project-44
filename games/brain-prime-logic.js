import readlineSync from 'readline-sync';
// Setting minimum possible number for the game
const minNum = 1;
// Setting maximum possible number for the game minus minimum number
const maxNum = 100;
// Generate rnd num in range from minNum to maxNum inclusive
const rndNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
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
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    return false;
  }
  return true;
};

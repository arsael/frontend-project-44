import readlineSync from 'readline-sync';

const maxNum = 100;
const actions = ['-', '+', '*'];
// Generate rnd num in range from 0 to max
const rndNum = () => Math.floor(Math.random() * maxNum);
const rndFromArray = (array) => array[Math.floor(Math.random() * (array.length - 1))];
// Checking if number is even
const getRightAnswer = (num1, num2, action) => eval(`${num1} ${action} ${num2}`);

// Getting user input
const getUserInput = (num1, num2, action) => readlineSync.question(`What is the result of the expression? \nQuestion: ${num1} ${action} ${num2} \nYour answer: `);

// Checking if user input is right
const checkUserInput = (input, answer) => parseInt(input, 10) === parseInt(answer, 10);

// The game
export default (name) => {
  const rndNum1 = rndNum();
  const rndNum2 = rndNum();
  const action = rndFromArray(actions);
  const rightAnswer = getRightAnswer(rndNum1, rndNum2, action);
  const userInput = getUserInput(rndNum1, rndNum2, action);
  const isCorrect = checkUserInput(userInput, rightAnswer);
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    return false;
  }
  return false;
};

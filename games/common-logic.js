import readlineSync from 'readline-sync';

export const gameAnswer = (answerStatus, userInput, rightAnswer, name) => {
  if (answerStatus) {
    console.log('Correct!');
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    return false;
  }
  return true;
};
// Generate rnd num in range from minNum to maxNum inclusive
export const rndNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Getting user input
export const getUserInput = (game, num1, num2, action, array) => {
  let phrase;
  switch (game) {
    case ('brain-calc'):
      phrase = `What is the result of the expression? \nQuestion: ${num1} ${action} ${num2} \nYour answer: `;
      break;
    case ('brain-even'):
      phrase = `Answer "yes" if the number is even, otherwise answer "no". \nQuestion: ${num1} \nYour answer: `;
      break;
    case ('brain-gcd'):
      phrase = `Find the greatest common divisor of given numbers. \nQuestion: ${num1} ${num2} \nYour answer: `;
      break;
    case ('brain-prime'):
      phrase = `Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${num1} \nYour answer: `;
      break;
    case ('brain-progression'):
      phrase = `What number is missing in the progression? \nQuestion: ${array.join(' ')} \nYour answer: `;
      break;
    default:
      break;
  }
  return readlineSync.question(phrase);
};

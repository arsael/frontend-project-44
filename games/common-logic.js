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
export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomArray = (start, step, length) => {
  const array = [];
  let current = start;
  for (let i = 0; i <= length; i += 1) {
    array.push(current + step);
    current += step;
  }
  return array;
};

const hideInArray = (array, position) => {
  const arrayWithHidden = [...array];
  arrayWithHidden[position] = '..';
  return arrayWithHidden;
};

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
// random generated content for games
export const randomContent = (settings = []) => {
  const rndNum1 = randomNumber(settings[0], settings[1]);
  const rndNum2 = randomNumber(settings[0], settings[1]);
  const rndStep = randomNumber(settings[2], settings[3]);
  const rndLength = randomNumber(settings[4], settings[5]);
  const rndPosition = randomNumber(0, rndLength);
  const rndArray = randomArray(rndNum1, rndStep, rndLength);
  const rndArrayWithHidden = hideInArray(rndArray, rndPosition);
  const rndAction = settings[6][randomNumber(0, settings[6].length - 1)];
  return [rndNum1, rndNum2, rndStep, rndLength, rndPosition, rndArray,
    rndArrayWithHidden, rndAction];
};

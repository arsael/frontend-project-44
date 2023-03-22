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

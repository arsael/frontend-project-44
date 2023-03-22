import readlineSync from 'readline-sync';
const maxNum = 100;

//Checking if number is even
const checkIsEven = (number) => number % 2 === 0 ? 'yes' : 'no';

//Getting user input
const yesOrNo = (number) => readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no". \nQuestion: ${number} \nYour answer: `);

//Checking if user input is right
const checkUserInput = (input, isEven) => input === isEven;

//The game
export const evenGame = (userName) => {
        const rndNum = Math.floor(Math.random() * maxNum);
        const numIsEven = checkIsEven(rndNum);
        const userInput = yesOrNo(rndNum);
        const isCorrect = checkUserInput(userInput, numIsEven);
        if (isCorrect) {
            console.log('Correct!');
        } else {
            console.log("'" + userInput + "' is wrong answer ;(. Correct answer was '" + numIsEven + "'. \nLet's try again, " + userName + "!");
            return false;
        }
};



import getUserName from './cli.js';
// Setting a count of rounds for each game
const roundCount = 3;
// Starting the game
export default (game) => {
  const userName = getUserName();
  for (let i = 0; i < roundCount; i += 1) {
    if (game) {
      const result = game(userName);
      if (result === false) {
        return false;
      }
    } else {
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return false;
};

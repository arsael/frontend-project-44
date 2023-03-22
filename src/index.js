import {getUserName} from "./cli.js";
const roundCount = 3;
export const playGame = (game) => {
    const userName = getUserName();
    for (let i = 0; i < roundCount; i++) {
        if(game) {
            const result = game(userName);
            if(result === false) {
                return false;
            }
        } else {
            return false;
        }
    }
    console.log('Congratulations, ' + userName + '!');
}

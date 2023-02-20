function rockPaper(per1, per2) {
    if (per1 === 'rock') {
        switch (per2) {
            case 'rock':
                return "Draw!";
                break;
            case 'paper':
                return "Player 2 Won!";
                break;
            case 'scissors':
                return "Player 1 Won!";
            case 'lizard':
                return "Player 1 Won!";
                break;
            case 'spock':
                return "Player 2 Won!";
                break;
            default:
                return "Player 2 did not pick a valid option";
        };
    } else if (per1 === 'paper') {
        switch (per2) {
            case 'rock':
                return "Player 1 Won!";
                break;
            case 'paper':
                return "Draw!";
                break;
            case 'scissors':
                return "Player 2 Won!";
            case 'lizard':
                return "Player 2 Won!";
                break;
            case 'spock':
                return "Player 1 Won!";
                break;
            default:
                return "Player 2 did not pick a valid option";
        };
    } else if (per1 === 'scissors') {
        switch (per2) {
            case 'rock':
                return "Player 2 Won!";
                break;
            case 'paper':
                return "Player 1 Won!";
                break;
            case 'scissors':
                return "Draw!";
            case 'lizard':
                return "Player 1 Won!";
                break;
            case 'spock':
                return "Player 2 Won!";
                break;
            default:
                return "Player 2 did not pick a valid option";
        };
    } else if (per1 === 'lizard') {
        switch (per2) {
            case 'rock':
                return "Player 2 Won!";
                break;
            case 'paper':
                return "Player 1 Won!";
                break;
            case 'scissors':
                return "Player 2 Won!";
            case 'lizard':
                return "Draw!";
                break;
            case 'spock':
                return "Player 1 Won!";
                break;
            default:
                return "Player 2 did not pick a valid option";
        };
    } else if (per1 === 'spock') {
        switch (per2) {
            case 'rock':
                return "Player 1 Won!";
                break;
            case 'paper':
                return "Player 2 Won!";
                break;
            case 'scissors':
                return "Player 1 Won!";
            case 'lizard':
                return "Player 2 Won!";
                break;
            case 'spock':
                return "Draw!";
                break;
            default:
                return "Player 2 did not pick a valid option";
        };
    } else {
        return "Player 1 did not pick a valid option.";
    };
};

console.log(rockPaper('spock', 'lizard'));

function choice () {

    let number = Math.floor(Math.random()*100);
    
    if(number < 33.3333) {return 'Rock'}
    else if (number >= 33.3333 && number < 66.6666) {return 'Paper'}
    else {return 'Scissors'};

};

function versus (a, b) {

    if (a === b) {return 'Tie'}
    else if (a == 'rock' && b == 'scissors' ||    
             a == 'paper' && b == 'rock' ||
             a == 'scissors' && b == 'paper') {
                return 'User wins'
             }
    else if (b == 'rock' && a == 'scissors' ||    
             b == 'paper' && a == 'rock' ||
             b == 'scissors' && a == 'paper') {
                return 'Computer wins'
             }

};

let userScore = 0;
let computerScore = 0;

for (let i= 0; i < 5; i++) {

    let userChoice = prompt().toLowerCase()
    userChoice.focus()

    let computerChoice = choice().toLowerCase()
    
    let result = versus(userChoice, computerChoice)

    console.log(computerChoice);
    console.log(result);



    if (result == 'User wins') {userScore++}
    else if (result == 'Computer wins') {computerScore++};

    console.log(userScore, computerScore)
    
}

if (userScore > computerScore) {console.log('I dont feel embarrassment by falling against the best')}
else if ( computerScore > userScore) {{console.log('Better luck next time')}}
else {console.log('Another One')}

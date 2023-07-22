let UserName = prompt ('Please enter your name: ');

if (UserName === '')
{
    UserName = 'User';
}
else if (UserName === null) {
    alert(AbortFun());
}
let UserScore = 0;
let ComputerScore = 0;
let ComputerTurn;
let UserTurn;
function AbortFun(){
const abort = 'You aborted this game. To start new game just refresh the page.';
return abort;
}
const TurnsArr = ['rock', 'paper', 'scissors'];

function StartGame() {
    while (UserScore !== 3 && ComputerScore !== 3) {
    if (UserTurnFun() === false)
    {
      return;
    }
    ComputerTurnFun();
    WinCheck(UserTurn, ComputerTurn);
    }
    EndGame();
    }

function UserTurnFun() {
  let CanelConfim;
  UserTurn = prompt('Rock, Scissors, Paper... Please make your move.');
  if (TurnsArr.includes(UserTurn))
  {
    return UserTurn;
  }
  else if (UserTurn === null)
  {
    CanelConfim = confirm('Do you really wanna abort this game?');
    if (CanelConfim === true)
    {
        alert(AbortFun());
        return false();
    }
    else
    {
        UserTurnFun();
    }
  }
  else
  {
    alert ('Wrong option. Try again.');
    UserTurnFun();
  }
  
}

function ComputerTurnFun() {
    ComputerTurn = TurnsArr[Math.floor(Math.random()*TurnsArr.length)];
    alert(`Computer move is: ${ComputerTurn}`);
    return ComputerTurn;
}
function WinCheck(UserTurn, ComputerTurn)
{
    function UserWinFun() {
    const UserWin = `You won this round. Current count is:  ${UserName}: ${UserScore} Computer: ${ComputerScore}`;
    return UserWin;
}
function ComputerWinWinFun() {
    const ComputerWin = `Computer won this round. Current count is:  ${UserName}: ${UserScore} Computer: ${ComputerScore}`;
    return ComputerWin;
}
function DrawFun() {
    const Draw = `It is draw. Current count is:  ${UserName}: ${UserScore} Computer: ${ComputerScore}`;
    return Draw;
    }
    
  if (UserTurn === "paper" && ComputerTurn === "rock") {
    UserScore++;
    alert(
        UserWinFun()
    );
  }
  else if (UserTurn === "rock" && ComputerTurn === "scissors") {
    UserScore++;
    alert(
        UserWinFun()
    );
  }
  else if (UserTurn === "scissors" && ComputerTurn === "paper") {
    UserScore++;
    alert(
        UserWinFun()

    );
  }
  else if (UserTurn === "rock" && ComputerTurn === "paper") {
    ComputerScore++;
    alert(
        ComputerWinWinFun()
    );
  }
  else if (UserTurn === "scissors" && ComputerTurn === "paper") {
    ComputerScore++;
    alert(
        ComputerWinWinFun()
    );
  }
  else if (UserTurn === "paper" && ComputerTurn === "scissors") {
    ComputerScore++;
    alert(
        ComputerWinWinFun()
    );
  } 
  else if (UserTurn === null)
  {
    alert ('Wrong option. Try again.');
    UserTurnFun();
  }
  else {
  alert(DrawFun());
};
}

function EndGame() 
{
    let RefreshGame;
    function NewGameFun(){   
    const NewGame = 'Do you want to start a new game?';
    return NewGame;
    }
    if (UserScore === 3)
    {
        alert(`Congratulations. You won this game. Count - You: ${UserScore} : Computer ${ComputerScore}`)
        
        RefreshGame = confirm (NewGameFun())
        if (RefreshGame)
        {
            UserScore = 0;
            ComputerScore = 0;
            StartGame();
        }
    } 
    else if (ComputerScore === 3)
    {
        alert(`Sorry. You lost this game. Count - You: ${UserScore} : Computer ${ComputerScore}`);
        RefreshGame = confirm (NewGameFun())
        if (RefreshGame)
        {
            UserScore = 0;
            ComputerScore = 0;
            StartGame();
        }
    }
}
if (UserName)
{
StartGame();
}
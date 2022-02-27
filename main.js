// gamecell connection to JS ( GameCells )
let gameCells = document.querySelectorAll('.gameCell');
gameCells = Array.from(gameCells);

// potential winning combination list
let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// inital player ID
playerID = 'X';

// checks as is situation in gameCells in comparison to winCombinations and return colored ShowWinnerCells
function winnerControl(){
    winConditions.forEach(function(combination){
        let check = combination.every(index => gameCells[index].innerText.trim() == playerID)
        if(check){
            showWinnerCells(combination);
        }
    })
}

// cell selection for X / O players and control winning condition
gameCells.forEach(function(gameCell) {
    gameCell.addEventListener('click', function(){
        if(gameCell.innerText.trim() == ''){
            gameCell.innerText = playerID
            winnerControl()
            playerID = playerID == 'X' ? 'O': 'X';
            }
        
        })
})

// shows the winner and winning cells via different colors
function showWinnerCells(combination){
    combination.forEach(function(index){
        gameCells[index].classList.add("showWinnerCells")
    })
}


 




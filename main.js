function coinFlip(){
  function flip() {
    return Math.floor((Math.random() * 2) + 1)
  }
  var result = flip();
  if (result === 1){
    document.getElementById("coin").src="images/heads/jpg";
    winner = `HEADS`;
    head_win = heads_wins.push(result);
    document.getElementById("heads_win").innerText = head_win;
  } else if (result === 2) {
    document.getElementById("coin").src="images/tails.jpg";
    winner = `TAILS`;
    tail_win = `${tails_wins.push(result)}`;
    document.getElementById("tail_win").innerText = tail_win;
  }
  document.getElementById("winner").innerText = winner;
}

function score(){
  if(heads_wins.length + tails_wins.length === 9) {
    if (heads_wins.length > tails_wins.length) {
      document.getElementById("coin").src="images/heads/jpg";
      final_winner = `The winner is HEADS with ${heads_wins.length} wins!`;
      print_winner();
    } else if (tails_wins.length > heads_wins.length) {
      document.getElementById("coin").src="images/tails.jpg";
      final_winner = `The winner is TAILS with ${tails_wins.length} wins!`;
      print_winner();
    }
  }
}

function print_winner() {
  winner = ''
  document.getElementById("final_winner").innerHTML = final_winner;
  fallingCoins()
  setTimeout(playAgain, 4000);
}

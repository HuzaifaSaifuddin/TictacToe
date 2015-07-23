/*For looping player turns*/
var player = 1;
/*For Win/loss/draw count*/
var p1w = 1;
var p2l = 1;
var p2w = 1;
var p1l = 1;
var drw1 = 1;
var drw2 = 1;
/*For Disabling board on win/loss*/
var game = true;
/*Count clicks for draw events*/
var clickedCount = 0;

/*For declaring playerChoice so the game start with that choice*/
var player1Choice = "X";
var player2Choice = "O";

/*Setting Choice*/
function setChoice(choice) {

	if(choice == "X"){
		document.getElementById('choosen1').innerHTML = "Player 1 The 'X'";
		document.getElementById('choosen2').innerHTML = "Player 2 'O'lways"; 	
		player1Choice = "X";
		player2Choice = "O";
	}else{
		document.getElementById('choosen1').innerHTML = "Player 1 'O'lways";
		document.getElementById('choosen2').innerHTML = "Player 2 The 'X'";
		player1Choice = "O";
		player2Choice = "X";
	}
	
	document.getElementById('box2new').style.display = "none";
	document.getElementById('box2').style.display = "inline-block";
	document.getElementById('result1').style.display = "block";
	document.getElementById('result2').style.display = "block";
}

/*Looping Players Turn*/

function clickBtn(btn){
	if(game === false) {
		return;
	}
	if (player == 1) {
		document.getElementById(btn).value = player1Choice;
		document.getElementById(btn).disabled = "disabled";
		player -= 1;		
	} else {
		document.getElementById(btn).value = player2Choice;
		document.getElementById(btn).disabled = "disabled";
		player += 1;		
	}
	clickedCount++;
	winner();
}

/*Decide Winner*/

function winner() {
	if (document.getElementById('btn1').value == "X" &&
		document.getElementById('btn2').value == "X" &&
		document.getElementById('btn3').value == "X" ||
		document.getElementById('btn1').value == "X" &&
		document.getElementById('btn4').value == "X" &&
		document.getElementById('btn7').value == "X" ||
		document.getElementById('btn1').value == "X" &&
		document.getElementById('btn5').value == "X" &&
		document.getElementById('btn9').value == "X" ||
		document.getElementById('btn2').value == "X" &&
		document.getElementById('btn5').value == "X" &&
		document.getElementById('btn8').value == "X" ||
		document.getElementById('btn3').value == "X" &&
		document.getElementById('btn6').value == "X" &&
		document.getElementById('btn9').value == "X" ||
		document.getElementById('btn3').value == "X" &&
		document.getElementById('btn5').value == "X" &&
		document.getElementById('btn7').value == "X" ||
		document.getElementById('btn4').value == "X" &&
		document.getElementById('btn5').value == "X" &&
		document.getElementById('btn6').value == "X" ||
		document.getElementById('btn7').value == "X" &&
		document.getElementById('btn8').value == "X" &&
		document.getElementById('btn9').value == "X") {

		if (document.getElementById('choosen1').innerHTML == "Player 1 The 'X'") {
			document.getElementById('result1').innerHTML = "Player 1 WON!";
			document.getElementById('result2').innerHTML = "Player 2 LOST!";
		} else if (document.getElementById('choosen1').innerHTML == "Player 1 'O'lways") {
			document.getElementById('result1').innerHTML = "Player 1 LOST!";
			document.getElementById('result2').innerHTML = "Player 2 WON!";
		} else {}
		document.getElementById('opacgy').style.opacity = "0.2";
	
		if (document.getElementById('result1').innerHTML == "Player 1 WON!") {
			document.getElementById('count1').innerHTML = p1w++ ;
			document.getElementById('count3').innerHTML = p2l++ ;
		} else if (document.getElementById('result1').innerHTML == "Player 1 LOST!") {
			document.getElementById('count4').innerHTML = p2w++ ;
			document.getElementById('count2').innerHTML = p1l++ ;
		} else {}
		game = false;

	} else if ( document.getElementById('btn1').value == "O" &&
				document.getElementById('btn2').value == "O" &&
				document.getElementById('btn3').value == "O" ||
				document.getElementById('btn1').value == "O" &&
				document.getElementById('btn4').value == "O" &&
				document.getElementById('btn7').value == "O" ||
				document.getElementById('btn1').value == "O" &&
				document.getElementById('btn5').value == "O" &&
				document.getElementById('btn9').value == "O" ||
				document.getElementById('btn2').value == "O" &&
				document.getElementById('btn5').value == "O" &&
				document.getElementById('btn8').value == "O" ||
				document.getElementById('btn3').value == "O" &&
				document.getElementById('btn6').value == "O" &&
				document.getElementById('btn9').value == "O" ||
				document.getElementById('btn3').value == "O" &&
				document.getElementById('btn5').value == "O" &&
				document.getElementById('btn7').value == "O" ||
				document.getElementById('btn4').value == "O" &&
				document.getElementById('btn5').value == "O" &&
				document.getElementById('btn6').value == "O" ||
				document.getElementById('btn7').value == "O" &&
				document.getElementById('btn8').value == "O" &&
				document.getElementById('btn9').value == "O") {
	
		if (document.getElementById('choosen2').innerHTML == "Player 2 The 'X'") {
			document.getElementById('result1').innerHTML = "Player 1 WON!";
			document.getElementById('result2').innerHTML = "Player 2 LOST!";
		} else if (document.getElementById('choosen2').innerHTML == "Player 2 'O'lways") {
			document.getElementById('result1').innerHTML = "Player 1 LOST!";
			document.getElementById('result2').innerHTML = "Player 2 WON!";
		}
		document.getElementById('opacgy').style.opacity = "0.2";

		if (document.getElementById('result2').innerHTML == "Player 2 WON!") {
			document.getElementById('count4').innerHTML = p2w++ ;
			document.getElementById('count2').innerHTML = p1l++ ;
		} else if (document.getElementById('result2').innerHTML == "Player 2 LOST!") {
			document.getElementById('count3').innerHTML = p2l++ ;
			document.getElementById('count1').innerHTML = p1w++ ;
		}
		game = false;
	} else if(clickedCount >= 9){
		document.getElementById('result2').innerHTML = "IT'S A DRAW!";
		document.getElementById('result1').innerHTML = "IT'S A DRAW!";
		document.getElementById('counta').innerHTML = drw1++ ;
		document.getElementById('countb').innerHTML = drw2++ ;
		document.getElementById('opacgy').style.opacity = "0.2";
		}
}


/*Reset Everything for new game*/

function reset() {
	document.getElementById('btn1').value = "";
	document.getElementById('btn1').disabled = false;
	document.getElementById('btn2').value = "";
	document.getElementById('btn2').disabled = false;
	document.getElementById('btn3').value = "";
	document.getElementById('btn3').disabled = false;
	document.getElementById('btn4').value = "";
	document.getElementById('btn4').disabled = false;
	document.getElementById('btn5').value = "";
	document.getElementById('btn5').disabled = false;
	document.getElementById('btn6').value = "";
	document.getElementById('btn6').disabled = false;
	document.getElementById('btn7').value = "";
	document.getElementById('btn7').disabled = false;
	document.getElementById('btn8').value = "";
	document.getElementById('btn8').disabled = false;
	document.getElementById('btn9').value = "";
	document.getElementById('btn9').disabled = false;
	document.getElementById('result1').innerHTML = "Game In Progress...";
	document.getElementById('result2').innerHTML = "Game In Progress...";
	document.getElementById('opacgy').style.opacity = "1";
	game = true;
	clickedCount = 0;
	player = 1;
}
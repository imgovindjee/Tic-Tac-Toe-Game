console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioChangeTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let gameEnd = false

let turn = 'X'
// function to change the turn
const changeTurn = ()=>{
	return turn === 'X'?"0":"X"
}

// function to check for a win
const checkWin = ()=>{
	let boxtext = document.getElementsByClassName("box-text")
	let win = [
		[0, 1, 2, 3, 6, 0],
		[3, 4, 5, 3, 18, 0],
		[6, 7, 8, 3, 30, 0], 
		[0, 3, 6, -9, 18, 90], 
		[1, 4, 7, 3, 18, 90],
		[2, 5, 8, 15, 18, 90],
		[0, 4, 8, 3, 18, 45],
		[2, 4, 6, 3, 18, 135]
	]

	win.forEach(e => {
		if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
			document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
			gameEnd = true
			gameOver.play();
			document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "220px"
			document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
			document.querySelector(".line").style.width = "30vw";
		}
	})
}



// Game Logic
music.play();
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
	let boxtext = element.querySelector('.box-text');
	element.addEventListener('click', ()=>{
		if(boxtext.innerText === ''){
			boxtext.innerText = turn
			turn = changeTurn();
			audioChangeTurn.play();
			checkWin()
			if(!gameEnd){
				document.getElementsByClassName("info")[0].innerText = "Turn for "+turn
			}
		}
	})
})


// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
	let boxtext = document.querySelectorAll('.box-text');
	Array.from(boxtext).forEach(element =>{
		element.innerText = ""
	})
	turn = 'X'
	gameEnd = false
	document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
	document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "0px"
	document.querySelector(".line").style.width = "0vw";
})
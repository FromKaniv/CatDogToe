
var eraserAudio = new Audio('sounds//eraser.mp3');

var errorCheatPanel = new Audio('sounds//cheatpanel//error_cheatpanel.mp3');
var correctCheatPanel = new Audio('sounds//cheatpanel//correct_cheatpanel.mp3');
var openCheatPanel = new Audio('sounds//cheatpanel//open_cheatpanel.mp3');

var meowAudio1 = new Audio('sounds//cat//meow1.mp3');
var meowAudio2 = new Audio('sounds//cat//meow2.mp3');
var meowAudio3 = new Audio('sounds//cat//meow3.mp3');
var meowAudio4 = new Audio('sounds//cat//meow4.mp3');
var meowAudio5 = new Audio('sounds//cat//meow5.mp3');

var dogAudio1 = new Audio('sounds//dog//dog1.mp3');
var dogAudio2 = new Audio('sounds//dog//dog2.mp3');
var dogAudio3 = new Audio('sounds//dog//dog3.mp3');
var dogAudio4 = new Audio('sounds//dog//dog4.mp3');
var dogAudio5 = new Audio('sounds//dog//dog5.mp3');

//var pencilAudio1 = new Audio('sounds//pencil//pencil1.mp3');
//var pencilAudio2 = new Audio('sounds//pencil//pencil2.mp3');
//var pencilAudio3 = new Audio('sounds//pencil//pencil3.mp3');
//var pencilAudio4 = new Audio('sounds//pencil//pencil4.mp3');
//var pencilAudio5 = new Audio('sounds//pencil//pencil5.mp3');

var soundButton = document.getElementById('volume_upid');
soundButton.textContent = "volume_up" // "volume_up" or "no_sound"

var players = "catVSdog"; // "catVSdog"

var player1 = "😺";
var player2 = "🐶";

var gameEnd = false;
var space = "❔";

var soundOn = true
var stepBy = player1;
var firstStepBy = player1;
var playersOld = players

var stateText = document.getElementById('state');

var block1on1 = document.getElementById('1.1');
var block1on2 = document.getElementById('1.2');
var block1on3 = document.getElementById('1.3');

var block2on1 = document.getElementById('2.1');
var block2on2 = document.getElementById('2.2');
var block2on3 = document.getElementById('2.3');

var block3on1 = document.getElementById('3.1');
var block3on2 = document.getElementById('3.2');
var block3on3 = document.getElementById('3.3');

stateText.innerHTML = "Хід" + " " + stepBy;

function isMapClear() {
	if (block1on1.value != space && block1on2.value != space && block1on3.value != space && block2on1.value != space && block2on2.value != space && block2on3.value != space && block3on1.value != space && block3on2.value != space && block3on3.value != space) {return false}
		else {return true}
}

function restart(sound) {
	if (sound == true && soundOn == true) {eraserAudio.play()}
	gameEnd = false
	clearAll()
	nonclassAll()
	stepBy = reverse(stepBy)
	stateText.innerHTML = "Хід " + stepBy;
}

function e(item) {
	if (item.value == reverse(stepBy)) {
		return true;
	} else {
		return false;
	}
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomAudio(type) {
	if (soundOn == true) {
		if (type == "cats") {
			randomAudioNum = random(1, 5);
			if (randomAudioNum == 1) {meowAudio1.play()}
			else if (randomAudioNum == 2) {meowAudio2.play()}
			else if (randomAudioNum == 3) {meowAudio3.play()}
			else if (randomAudioNum == 4) {meowAudio4.play()}
			else if (randomAudioNum == 5) {meowAudio5.play()}
			else {console.log(" !  Не вдалося програти звук")}
		} else if (type == "dogs") {
			randomAudioNum = random(1, 5);
			if (randomAudioNum == 1) {dogAudio1.play()}
			else if (randomAudioNum == 2) {dogAudio2.play()}
			else if (randomAudioNum == 3) {dogAudio3.play()}
			else if (randomAudioNum == 4) {dogAudio4.play()}
			else if (randomAudioNum == 5) {dogAudio5.play()}
			else {console.log(" !  Не вдалося програти звук")}
		} else if (type == "pencil") {
			randomAudioNum = random(1, 5);
			if (randomAudioNum == 1) {pencilAudio1.play()}
			else if (randomAudioNum == 2) {pencilAudio2.play()}
			else if (randomAudioNum == 3) {pencilAudio3.play()}
			else if (randomAudioNum == 4) {pencilAudio4.play()}
			else if (randomAudioNum == 5) {pencilAudio5.play()}
		} else {
			console.log(" !  Невідомий набір звуків")
		}
	}
}

function clearAll() {
	for (var i = 1; i < 4; i++) {
		itemVar = 1;
		GEBI = document.getElementById(i+"."+itemVar)
		GEBI.value = space;
		//GEBI.style.background = "#e7e7e7"
		itemVar++;
		GEBI = document.getElementById(i+"."+itemVar)
		GEBI.value = space;
		//GEBI.style.background = "#e7e7e7"
		itemVar++;
		GEBI = document.getElementById(i+"."+itemVar)
		GEBI.value = space;
		//GEBI.style.background = "#e7e7e7"
	}
}

function nonclassAll() {
	for (var i = 1; i < 4; i++) {
		itemVar = 1;
		document.getElementById(i+"."+itemVar).className = "gridElement";
		itemVar++;
		document.getElementById(i+"."+itemVar).className = "gridElement";
		itemVar++;
		document.getElementById(i+"."+itemVar).className = "gridElement";
	}
}

function reverse(obj) {
	if (obj == player1) {
		return player2;
	} else if (obj == player2) {
		return player1;
	} else {
		return null;
	}
}

function reverseVolume() {
	if (soundOn == true) {
		soundOn = false
		soundButton.textContent = "no_sound"
	} else {
		soundOn = true
		soundButton.textContent = "volume_up"
	}
}

function upgradeEmoji(emoji) {
	if (emoji == "😺") {
		return "😸"
	} else if (emoji == "🐶") {
		return "🐕"
	}
	//if (emoji == "❌") {
	//	return "❌"
	//} else if (emoji == "⭕") {
	//	return "⭕"
	//}
	//if (emoji == "🚓") {
	//	return "🚓"
	//} else if (emoji == "🚒") {
	//	return "🚒"
	//}
}
function set(obj) {
	if (obj.value == space) {
		if (stepBy == player1 && gameEnd == false) {
			if (players == "catVSdog") {randomAudio("cats")}
			else if (players == "classic") {randomAudio("pencil")}
			obj.value = player1;
			//obj.disabled = true;
			//obj.style.background='#FA8072'
			stepBy = reverse(player1);
			stateText.innerHTML = "Хід " + player2;
			console.log(player1 + " зайняв положення "+obj.id)
			document.title = "😺 CatDogToe"
		} else if (stepBy == player2 && gameEnd == false) {
			if (players == "catVSdog") {randomAudio("dogs")}
			else if (players == "classic") {randomAudio("pencil")}
			obj.value = player2;
			//obj.disabled = true;
			//obj.style.background='#00FFFF'
			stepBy = reverse(player2);
			stateText.innerHTML = "Хід "+player1;
			console.log(player2+" зайняв положення "+obj.id)
			document.title = "🐶 CatDogToe"
		}
	} else {
		console.log(" i  Клітина "+obj.id+" недоступна");
	}
		
	if (gameEnd == false && e(block1on1) && e(block2on2) && e(block3on3) || e(block1on3) && e(block2on2) && e(block3on1) || e(block1on2) && e(block2on2) && e(block3on2) || e(block2on1) && e(block2on2) && e(block2on3) || e(block1on1) && e(block1on2) && e(block1on3) || e(block3on1) && e(block3on2) && e(block3on3) || e(block1on1) && e(block2on1) && e(block3on1) || e(block3on3) && e(block2on3) && e(block1on3)) {
		// Підсвітка та апгрейт емодзі
		// Діагоналі
		if (e(block1on1) && e(block2on2) && e(block3on3)) {block1on1.className="winGridElement"; block2on2.className="winGridElement"; block3on3.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block1on1.value = upgradeEmoji(reverse(stepBy)); block2on2.value = upgradeEmoji(reverse(stepBy))}; block3on3.value = upgradeEmoji(reverse(stepBy))}
		if (e(block1on3) && e(block2on2) && e(block3on1)) {block1on3.className="winGridElement"; block2on2.className="winGridElement"; block3on1.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block1on3.value = upgradeEmoji(reverse(stepBy)); block2on2.value = upgradeEmoji(reverse(stepBy))}; block3on1.value = upgradeEmoji(reverse(stepBy))}
		// Вертикалі
		if (e(block1on2) && e(block2on2) && e(block3on2)) {block1on2.className="winGridElement"; block2on2.className="winGridElement"; block3on2.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block1on2.value = upgradeEmoji(reverse(stepBy)); block2on2.value = upgradeEmoji(reverse(stepBy))}; block3on2.value = upgradeEmoji(reverse(stepBy))}
		if (e(block1on1) && e(block2on1) && e(block3on1)) {block1on1.className="winGridElement"; block2on1.className="winGridElement"; block3on1.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block3on1.value = upgradeEmoji(reverse(stepBy)); block2on1.value = upgradeEmoji(reverse(stepBy))}; block1on1.value = upgradeEmoji(reverse(stepBy))}
		if (e(block1on3) && e(block2on3) && e(block3on3)) {block1on3.className="winGridElement"; block2on3.className="winGridElement"; block3on3.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block1on3.value = upgradeEmoji(reverse(stepBy)); block2on3.value = upgradeEmoji(reverse(stepBy))}; block3on3.value = upgradeEmoji(reverse(stepBy))}
		// Горизонталі
		if (e(block1on1) && e(block1on2) && e(block1on3)) {block1on1.className="winGridElement"; block1on2.className="winGridElement"; block1on3.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block1on1.value = upgradeEmoji(reverse(stepBy)); block1on2.value = upgradeEmoji(reverse(stepBy))}; block1on3.value = upgradeEmoji(reverse(stepBy))}
		if (e(block2on1) && e(block2on2) && e(block2on3)) {block2on1.className="winGridElement"; block2on2.className="winGridElement"; block2on3.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block2on1.value = upgradeEmoji(reverse(stepBy)); block2on2.value = upgradeEmoji(reverse(stepBy))}; block2on3.value = upgradeEmoji(reverse(stepBy))}
		if (e(block3on1) && e(block3on2) && e(block3on3)) {block3on1.className="winGridElement"; block3on2.className="winGridElement"; block3on3.className="winGridElement"; if (players == "catVSdog" || players == "policeVSfire") {block3on1.value = upgradeEmoji(reverse(stepBy)); block3on2.value = upgradeEmoji(reverse(stepBy))}; block3on3.value = upgradeEmoji(reverse(stepBy))}
		stateText.innerHTML = reverse(stepBy) + " переміг!";
		console.log(reverse(stepBy) + " переміг")
		gameEnd = true
	} else if (block1on1.value != space && block1on2.value != space && block1on3.value != space && block2on1.value != space && block2on2.value != space && block2on3.value != space && block3on1.value != space && block3on2.value != space && block3on3.value != space) {
		stateText.innerHTML = "Нічия";
		gameEnd = true
	}
}

// Чит коди та налаштування


document.addEventListener("keydown", 
		function (event) { 
			if (event.key === "i") { 
				event.preventDefault(); 
				openCheatPanel.play()
				let command = prompt("Введіть чит-код");
				if (command == "giveup") {
					stateText.innerHTML = "Нічия";;
					gameEnd = true;
					console.log("CHEATS | Встановлена нічия");
					correctCheatPanel.play();
				} else if (command == "cat-cheater") {
					stateText.innerHTML =  "😺" + " переміг!";
					console.log("😺" + " переміг");
					gameEnd = true;
					console.log("CHEATS | Кіт переміг нечесним способом");
					correctCheatPanel.play();
				} else if (command == "dog-cheater") {
					stateText.innerHTML =  "🐶" + " переміг!";
					console.log("🐶" + " переміг");
					gameEnd = true;
					console.log("CHEATS | Собака переміг нечесним способом");
					correctCheatPanel.play();
				} else {
					errorCheatPanel.play();
				}
			} 
		}); 

clearAll();
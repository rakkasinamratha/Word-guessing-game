const wordsWithClues = [
    { word: 'javascript', clue: 'The language that makes web pages interactive.' },
    { word: 'programming', clue: 'The process of designing and building an executable computer program.' },
    { word: 'developer', clue: 'A person who writes code to create software applications.' },
    { word: 'html', clue: 'hyper text markup language short form.'}
];

let selectedWordInfo = {};
let guessedWord = [];
let attempts = 2;

function initializeGame() {
    selectedWordInfo = wordsWithClues[Math.floor(Math.random() * wordsWithClues.length)];
    guessedWord = Array(selectedWordInfo.word.length).fill('_');
    attempts = 2;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('clue').innerText = `Clue: ${selectedWordInfo.clue}`;
    document.getElementById('word-display').innerText = guessedWord.join(' ');
    document.getElementById('attempts-left').innerText = attempts;
}

function checkGuess() {
    if (attempts === 0) {
        return;
    }

    const guessInput = document.getElementById('guess-input').value.toLowerCase();
    
    if (guessInput === selectedWordInfo.word) {
        document.getElementById('message').innerText = 'Word Matched!';
        endGame(true);
    } else {
        attempts--;
        if (attempts === 0) {
            document.getElementById('message').innerText = `Word Not Matched. Attempts exhausted. The word was "${selectedWordInfo.word}".`;
            endGame(false);
        } else {
            document.getElementById('message').innerText = `Word Not Matched. ${attempts} attempts left.`;
        }
    }

    updateDisplay();
}

function endGame(isWinner) {
    document.getElementById('guess-input').disabled = true;
}

function startNewGame() {
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-input').value = '';
    document.getElementById('message').innerText = '';
    initializeGame();
}

document.addEventListener('DOMContentLoaded', initializeGame);
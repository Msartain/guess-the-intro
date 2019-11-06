// - - - - - - - const Variables - - - - - - -
const songs = [
     'assests/songs/Alanis_Morissette-Hand_In_My_Pocket.mp3',
     'assests/songs/Bill_Withers-Lovely_Day.mp3',
     'assests/songs/Blink-182-All_The_Small_Things.mp3',
     'assests/songs/Bryan_Adams-Summer_Of_69.mp3',
     'assests/songs/Coldplay-Yellow.mp3',
     'assests/songs/Jackson_5-I_Want_You_Back.mp3',
     'assests/songs/Led_Zeppelin-When_the_Levee_Breaks.mp3',
     'assests/songs/Oasis-Champagne_Supernova.mp3',
     'assests/songs/Phil_Collins-In_the_Air_Tonight.mp3',
     'assests/songs/Queen-Fat_Bottomed_Girls.mp3',
     'assests/songs/Spice_Girls-Wannabe.mp3' 
];

const correctGuesses = [
    'Alanis Morissette',
    'Bill Withers', 
    'Blink 182', 
    'Bryan Adams', 
    'Coldplay', 
    'Jackson 5',  
    'Led Zeppellin', 
    'Oasis', 
    'Phil Collins', 
    'Queen', 
    'The Spice Girls'
];

const wrongGuesses = [
    ['Madonna', 'Avril Lavigne', 'Taylor Swift'],
    ['Lionel Richie', 'Marvin Gaye', 'Nina Simone'],
    ['Sum 41', 'Green Day', 'Good Charlotte'],
    ['Ryan Adams', 'Bon Jovi', 'Guns n Roses'],
    ['U2', 'Maroon 5', 'Ed Sheeran'],
    ['The Sumpremes', 'Stevie Wonder', 'James Brown'],
    ['Pink Floyd', 'The Rolling Stones', 'Black Sabbath'],
    ['Blur', 'Arctic Monkeys', 'Radiohead'],
    ['Sting', 'Eric Clapton', 'Elton Join'],
    ['The Beatles', 'David Bowie', 'AC/DC'],
    ["Destiny's Child", 'Britney Spears', 'Christina Aguilera']
];        

const facts = [
    "Did you know: Alanis Morissette's 1999 tour was sponsored by MP3.com. She received company stock in the deal, which was worth millions before the Internet bubble burst a year later. She did sell $1.5 million worth of the stock before it collapsed.",
    "Did you know: Near the end of the song, Withers holds a note for 18 seconds... 'Lovely Daaaaaaaaay.' ",
    "Did you know: Blink-182 bass player Mark Hoppus met Skye Everly, the woman who would become his wife, on the shoot for this video.",
    "Did you know: In the Summer of '69, Bryan was 9 years old. He said of the song: 'It's a very simple song about looking back on the summertime and making love. For me, the 69 was a metaphor for making love not about the year.' ",
    "Did you know: The video was shot at a fast shutter speed to achieve the slow-motion. In order for Martin to sing along, he had to lip-sync to the song played at double speed.",
    "Did you know: This was the first Jackson 5 single released by Motown Records. It launched their career and went to #1 in the US, as did their next three releases: 'ABC,' 'The Love You Save' and 'I'll Be There.' ",
    "Did you know: The Drums for this iconic track were placed on the ground floor of a stairwell with the microphone hanging from the roof 3 stories up!",
    "Did you know: Noel Gallagher got the title when he misheard the name of the Pixies album Bossanova. He was watching a documentary about champagne at the time.",
    "Did you know: In 2014, Collins performed this at the Miami Country Day School in Miami, Florida, with his son's middle school band.",
    "Did you know: Queen guitarist Brian May wrote this song, which is about a young man who comes to appreciate women of substantial girth. May told Mojo magazine October 2008: 'I wrote it with Fred in mind, as you do especially if you've got a great singer who likes fat bottomed girls… or boys.' ",
    "Did you know: Worldwide, this is the best-selling single by an all-female group."
]

const player = new Audio();

// - - - - - - - State Variables - - - - - - -

let score = 0;

let currentSong, randomSong, songsIdx, wrongGuessButtons, listArea;

let playIntroClicks = [];

// - - - - - - - Cached Elements - - - - - - -

let proceed = document.getElementById('proceed');
let scoreBox = document.querySelector('h3');
let playIntro = document.getElementById('play-button');
// - - - - - - - Event Listeners - - - - - - -

playIntro.addEventListener('click', playSong);
// - - - - - - - - Functions - - - - - - - - -


//plays loaded song for 5 seconds.
function playSong(){
    currentSong = randomSong;
    if (preventMultiListen(playIntroClicks)) return;
    let song = currentSong;
    player.src = song;
    player.currentTime = 0; 
    player.play(song); 
    setInterval(function(){
        if(player.currentTime > 5){
            player.pause();
        }
    })
};

//selects a song at random from 'songs' array.
function randomSongSelect(arrSongs){
    randomSong = arrSongs[Math.floor(Math.random() * songs.length)];
    songsIdx = arrSongs.indexOf(randomSong);
    arrSongs.splice(songsIdx, 1);
};

//loads random song onto player.
proceed.addEventListener('click', function(){
    playIntroClicks = [];
    // playIntro.style.backgroundColor = 'red';
    randomSongSelect(songs, correctGuesses);
    createGuessButtons(correctGuesses,wrongGuesses);

});

//prevents user from listening to each intro more than 3 times.
function preventMultiListen(arr){
    if(arr >= 2){
        playIntro.style.backgroundColor = 'grey';
        return true;
    } else {
        playIntroClicks++
        return false
    }
};
//write function that displays list of artist choices

function createGuessButtons(arrCorrect, arrWrong){
    let buttons = [];
    if(endOfGame(songs, correctGuesses, wrongGuesses))return;
    //correct choice button creation
    listArea = document.getElementById('list-area')
    listArea.innerHTML = '';
    correctGuessButton = document.createElement('div')
    correctGuessButton.className += 'button ';
    correctGuessButton.addEventListener('click', checkCorrectGuess);
    correctGuessButton.innerHTML = arrCorrect[songsIdx];
    buttons.push(correctGuessButton);
    arrCorrect.splice(songsIdx, 1);
    createWrongGuessButtons(arrWrong)
    
    //wrong choice button creation
    function createWrongGuessButtons(arrWrong){
        let wrongChoices = [];
        wrongChoices.push(...arrWrong[songsIdx])
        for(var i = 0; i < wrongChoices.length; i ++) {
            wrongGuessButtons = document.createElement('div');
            wrongGuessButtons.className += 'button ';
            wrongGuessButtons.className += 'wrong ';
            wrongGuessButtons.addEventListener('click', checkIncorrectGuess);
            wrongGuessButtons.innerHTML = wrongChoices[i];
            buttons.push(wrongGuessButtons);
            }
    arrWrong.splice(songsIdx, 1);     
    }
    buttons = buttons.sort(function(a,b){return 0.5 - Math.random() })
    // listArea.appendChild(buttons);
    buttons.forEach(function(button){
        listArea.appendChild(button);
    })
};  

//write checkGuess function that displays message correct/incorrect and increments the score

function checkCorrectGuess(evt){
    // console.log(evt)
        correctGuessButton.style.backgroundColor = 'green';
        score++
        scoreBox.innerText =`Score:${score}`;
        alert('correct answer!')
};

function checkIncorrectGuess(){
    alert('wrong answer');
};

function endOfGame(arr1, arr2, arr3){
    if(arr1.length === 0 && arr2.length === 0 && arr3.length === 0){
        alert("end of game")
        return true
    } else{
        return false;
    }
}

function init(){
    let welcome = document.querySelector('ul')
    welcome.innerText = "Welcome to Who's That! A game to test your musical knowledge of iconic tracks.\n \n The rules are simple, you get 2 chances to play the intro of the selected track, then pick your guess from the list. \n  \n Hit the start button to begin! Good Luck!";
    let playProceed = document.querySelector('.play-proceed')
    playProceed.classList.add('hide')
    console.dir(playProceed)
    let startGame = document.getElementById('start-button');
    startGame.addEventListener('click', function(){
        playIntroClicks = [];
        randomSongSelect(songs, correctGuesses);
        createGuessButtons(correctGuesses,wrongGuesses);
        document.getElementById('start-game').remove();
        playProceed.classList.remove('hide')
    });
}

init();
//Bugs to fix: 
//1. Play Intro button still works if clicked after correct guess
//2. play button greys out too late

 
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

const player = new Audio();

// - - - - - - - State Variables - - - - - - -

let score = 0;

// let usedSongs = [];

let currentSong, randomSong, songsIdx;

let playIntroClicks = [];

// - - - - - - - Cached Elements - - - - - - -

let proceed = document.getElementById('proceed');

// - - - - - - - Event Listeners - - - - - - -

document.getElementById('play-button').addEventListener('click', playSong)

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
    randomSongSelect(songs, correctGuesses);
    createGuessButtons(correctGuesses,wrongGuesses);
});

//prevents user from listening to each intro more than 3 times.
function preventMultiListen(arr){
    if(arr >= 3){
        return true;
    } else {
        playIntroClicks++
        return false
    }
};
//write function that displays list of artist choices

function createGuessButtons(arr){
    let i = songsIdx;
    let listArea = document.getElementById('list-area')
    let correctGuessButton = document.createElement('button')
    correctGuessButton.innerHTML = arr[i];
    listArea.appendChild(correctGuessButton);
    arr.splice(songsIdx, 1);



    // for(var i = 0; i < arr.length; i += 1) {
    //     var correctGuessButton = document.createElement('button');
    //     correctGuessButton.innerHTML = arr[i];
    //     document.body.appendChild(ul);
    // }
 
};  


//write checkGuess function that displays message correct/incorrect and increments the score
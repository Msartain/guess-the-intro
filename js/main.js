// - - - - - - - const Variables - - - - - - -
// matches up with artist arr and choies arr
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

let usedSongs = [];

let currentSong;

let playIntroClicks = [];

// - - - - - - - Cached Elements - - - - - - -

let proceed = document.getElementById('proceed');




// - - - - - - - Event Listeners - - - - - - -

document.getElementById('play-button').addEventListener('click', playSong)


// - - - - - - - - Functions - - - - - - - - -


//plays loaded song for 5 seconds
function playSong(){
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

//selects a song at random from array
function randomSongSelect(arr){
    console.log("clicked")
    let randomSong = arr[Math.floor(Math.random() * songs.length)];
    let i = arr.indexOf(randomSong);
    arr.splice(i, 1);
    usedSongs.push(i)
    currentSong = randomSong;
};

//loads random song onto player
proceed.addEventListener('click', function(){
   playIntroClicks = [];
   randomSongSelect(songs);
   console.log(currentSong)
});

function preventMultiListen(arr){
    if(arr >= 3){
        return true;
    } else {
        playIntroClicks++
        return false
    }
};
// - - - - - - - const Variables - - - - - - -
// step 1 - organize data types
// paths array, arist array, choices array of arrays 
//step 2 make a function that ramdomizes the song and arrays + matches up with artist arr and choies arr
const songs = [
     { oneHand: "assests/songs/Alanis_Morissette-Hand_In_My_Pocket.mp3"},
     { lovelyDay: "assests/songs/Bill_Withers-Lovely_Day.mp3" },
     { smallThings: "assests/songs/Blink-182-All_The_Small_Things.mp3" },
     { sumOf69: "assests/songs/Bryan_Adams-Summer_Of_'69.mp3" },
     { yellow: "assests/songs/Coldplay-Yellow.mp3" },
     { wantYouBack: "assests/songs/Jackson_5-I_Want_You_Back.mp3" },
     { leveeBreaks: "assests/songs/Led_Zeppelin-When_the_Levee_Breaks.mp3" },
     { champSuper: "assests/songs/Oasis-Champagne_Supernova.mp3" },
     { inTheAir: "assests/songs/Phil_Collins-In_the_Air_Tonight.mp3" },
     { fatBottom: "assests/songs/Queen-Fat_Bottomed_Girls.mp3" },
     { wannabe: "assests/songs/Spice_Girls-Wannabe.mp3" } 
];

const artists = ['Alanis Morissette',
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

const guesses = [
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


// - - - - - - - Cached Elements - - - - - - -





// - - - - - - - Event Listeners - - - - - - -

document.getElementById('play-button').addEventListener('click', playSong)



// - - - - - - - - Functions - - - - - - - - -



function playSong(){
    let song = randomizeSongs(songs);
    player.src = song;
    player.currentTime = 0; 
    player.play(song); 
    setInterval(function(){
        if(player.currentTime > 5){
            player.pause();
        }
    })
};

function randomizeSongs(arr){
    // let randomSong = arr[Math.floor(Math.random() * songs.length)];
    let randomSong = arr[0].oneHand;
    return randomSong;
};

// function proceed(){

// }
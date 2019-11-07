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
     'assests/songs/Spice_Girls-Wannabe.mp3',
     'assests/songs/Bitter Sweet Symphony.mp3',
     'assests/songs/Bruce Hornsby & The Range - The Way It Is.mp3',
     'assests/songs/Bruce_Springsteen-Born_To_Run.mp3',
     'assests/songs/The Gorillaz - Clint Eastwood.mp3',
     'assests/songs/How Soon Is Now.mp3',
     'assests/songs/Notorious b.i.g- big poppa.mp3',
     'assests/songs/The Police - Every Breath You Take.mp3',
     'assests/songs/The Rolling Stones - Paint It, Black.mp3',
     'assests/songs/Whitney Houston - I Wanna Dance With Somebody (Legendado).mp3',
     'assests/songs/Bee Gees - Stayin Alive .mp3'
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
    'The Spice Girls',
    'The Verve',
    'Bruce Hornsby',
    'Bruce Springsteen',
    'The Gorillaz',
    'The Smiths',
    'Notorious B.I.G',
    'The Police',
    'The Rolling Stones',
    'Whitney Houston',
    'The Bee Gees'
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
    ['Sting', 'Eric Clapton', 'Elton John'],
    ['The Beatles', 'David Bowie', 'AC/DC'],
    ["Destiny's Child", 'Britney Spears', 'Christina Aguilera'],
    ['Radiohead', 'The Smiths', 'The Cure'],
    ['P Diddy', 'Don Henley', 'The Beach Boys'],
    ['The Rolling Stones', 'Matt Sartain', 'The Ramones'],
    ['Blur', 'D12', 'Franz Ferdinand'],
    ['New Order', 'Joy Division', 'Depeche Mode'],
    ['Dr.Dre', 'P.Diddy', 'Fat Man Scoop'],
    ['Dire Straits', 'Duran Duran', 'Genesis'],
    ['AC/DC', 'The Clash', 'The Beatles'],
    ['Tina Turner', 'Amy Winehouse', 'Mariah Carey'],
    ['The Monkeys', 'Abba', 'The Beach Boys']
];        

const facts = [
    "Correct answer! \n\nDid you know: Alanis Morissette's 1999 tour was sponsored by MP3.com. She received company stock in the deal, which was worth millions before the Internet bubble burst a year later. She did sell $1.5 million worth of the stock before it collapsed.",
    "Correct answer! \n\nDid you know: Near the end of the song, Withers holds a note for 18 seconds... 'Lovely Daaaaaaaaay.' ",
    "Correct answer! \n\nDid you know: Blink-182 bass player Mark Hoppus met Skye Everly, the woman who would become his wife, on the shoot for this video.",
    "Correct answer! \n\nDid you know: In the Summer of '69, Bryan was 9 years old. He said of the song: 'It's a very simple song about looking back on the summertime and making love. For me, the 69 was a metaphor for making love not about the year.' ",
    "Correct answer! \n\nDid you know: The video was shot at a fast shutter speed to achieve the slow-motion. In order for Martin to sing along, he had to lip-sync to the song played at double speed.",
    "Correct answer! \n\nDid you know: This was the first Jackson 5 single released by Motown Records. It launched their career and went to #1 in the US, as did their next three releases: 'ABC,' 'The Love You Save' and 'I'll Be There.' ",
    "Correct answer! \n\nDid you know: The Drums for this iconic track were placed on the ground floor of a stairwell with the microphone hanging from the roof 3 stories up!",
    "Correct answer! \n\nDid you know: Noel Gallagher got the title when he misheard the name of the Pixies album Bossanova. He was watching a documentary about champagne at the time.",
    "Correct answer! \n\nDid you know: In 2014, Collins performed this at the Miami Country Day School in Miami, Florida, with his son's middle school band.",
    "Correct answer! \n\nDid you know: Queen guitarist Brian May wrote this song, which is about a young man who comes to appreciate women of substantial girth. May told Mojo magazine October 2008: 'I wrote it with Fred in mind, as you do especially if you've got a great singer who likes fat bottomed girls… or boys.' ",
    "Correct answer! \n\nDid you know: Worldwide, this is the best-selling single by an all-female group.",
    "Correct answer! \n\nDid you know: The Verve fact.",
    "Correct answer! \n\nDid you know: Bruce Hornsby fact.",
    "Correct answer! \n\nDid you know: Bruce Springsteen fact.",
    "Correct answer! \n\nDid you know: The Gorillaz fact.",
    "Correct answer! \n\nDid you know: The Smiths fact.",
    "Correct answer! \n\nDid you know: Notorious B.I.G fact.",
    "Correct answer! \n\nDid you know: The Police fact.",
    "Correct answer! \n\nDid you know: The ROlling Stones fact.",
    "Correct answer! \n\nDid you know: Whitney Houston fact.",
    "Correct answer! \n\nDid you know: The Bee Gees fact.",
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


function playSong(){
    currentSong = randomSong;
    if (preventMultiListen(playIntroClicks)){
        return;
    }    
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

function randomSongSelect(arrSongs){
    randomSong = arrSongs[Math.floor(Math.random() * songs.length)];
    songsIdx = arrSongs.indexOf(randomSong);
    arrSongs.splice(songsIdx, 1);
};

proceed.addEventListener('click', function(){
    playIntroClicks = [];
    playIntro.style.backgroundColor = 'transparent';
    if (endOfGame(songs)){
        displayEndGameText();
        return ;
    }
    randomSongSelect(songs, correctGuesses);
    createGuessButtons(correctGuesses,wrongGuesses);
});

function preventMultiListen(arr){
    if (arr === 1){
        playIntro.style.backgroundColor = 'red';
    }
    if(arr > 1){
        return true;
    } else {
        playIntroClicks++
        return false
    }
};

function createGuessButtons(arrCorrect, arrWrong){
    let buttons = [];
    // if(endOfGame(songs))return;
    listArea = document.getElementById('list-area')
    listArea.innerHTML = '';
    correctGuessButton = document.createElement('div')
    correctGuessButton.className += 'button ';
    correctGuessButton.addEventListener('click', checkCorrectGuess);
    correctGuessButton.innerHTML = arrCorrect[songsIdx];
    buttons.push(correctGuessButton);
    arrCorrect.splice(songsIdx, 1);
    createWrongGuessButtons(arrWrong)
    
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
    buttons.forEach(function(button){
        listArea.appendChild(button);
    })
};  

function checkCorrectGuess(evt){
    correctGuessButton.style.backgroundColor = 'green';
    score++
    scoreBox.innerText =`Score:${score}`;
    setTimeout(function(){
        let messageFact = document.querySelector('ul');
        messageFact.innerText = facts[songsIdx];
        facts.splice(songsIdx, 1);
    }, 900);
    
};

function checkIncorrectGuess(evt){
    evt.target.style.backgroundColor = 'red';
    setTimeout(function(){
        let message = document.querySelector('ul');
        message.innerText = "That's incorrect!\n\n Hit Next Song to continue.";
        facts.splice(songsIdx, 1);
    }, 900);
};

function endOfGame(arr1){
     if(arr1.length === 11){
      return true;
    }
}

function displayEndGameText(){
    let playProceed = document.querySelector('.play-proceed')
    playProceed.classList.add('hide')
    // create a reset button or display the rest button
    if(score >= 9){
        let message = document.querySelector('ul');
        message.innerText = `End of Game! \n\n Your score was ${score} out of 10. You're a musical genius!`;
       } else if(score >= 7){
        let message = document.querySelector('ul');   
        message.innerText = `End of Game! \n\n Your score was ${score} out of 10. well done!`;
       } else if(score >= 5){
        let message = document.querySelector('ul');   
        message.innerText = `End of Game! \n\n Your score was ${score} out of 10. That's ok but you can do better!`;
       } else if(score >= 3){
        let message = document.querySelector('ul');   
        message.innerText = `End of Game! \n\n Your score was ${score} out of 10. Come on! You must be able to do better than that!`;
       } else{
        let message = document.querySelector('ul');   
        message.innerText = `End of Game! \n\n Your score was ${score} out of 10. Oh dear! Better luck next time.`;
    } 
    let startGame = document.getElementById('start-button');
    startGame.classList.add('hide');
    startGame.addEventListener('click', function(){
        playIntroClicks = [];
        randomSongSelect(songs, correctGuesses);
        createGuessButtons(correctGuesses,wrongGuesses);
        document.getElementById('start-game').remove();
    })
}

function init(){
    let welcome = document.querySelector('ul')
    welcome.innerText = "\n\nWelcome to Who's That! A game to test your musical knowledge of iconic tracks.\n \n The rules are simple, you get 2 chances to play the intro of the selected track, then pick your guess from the list. \n  \n When you're ready, turn your volume up and hit the start button, followed by the Play Intro button to begin! Good Luck!";
    let playProceed = document.querySelector('.play-proceed')
    playProceed.classList.add('hide')
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
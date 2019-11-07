// - - - - - - - const Variables - - - - - - -
const songsMaster = [
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

const correctGuessesMaster = [
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

const wrongGuessesMaster = [
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
   ['Tupac', 'Don Henley', 'The Beach Boys'],
   ['The Rolling Stones', 'Matt Sartain', 'The Ramones'],
   ['Blur', 'D12', 'Franz Ferdinand'],
   ['New Order', 'Joy Division', 'Depeche Mode'],
   ['Dr.Dre', 'P.Diddy', 'Fat Man Scoop'],
   ['Dire Straits', 'Duran Duran', 'Genesis'],
   ['AC/DC', 'The Clash', 'The Beatles'],
   ['Tina Turner', 'Amy Winehouse', 'Mariah Carey'],
   ['The Monkeys', 'Abba', 'The Beach Boys']
];        

const factsMaster = [
   "Correct answer! \n\nDid you know: Alanis Morissette's 1999 tour was sponsored by MP3.com. She received company stock in the deal, which was worth millions before the Internet bubble burst a year later. She did sell $1.5 million worth of the stock before it collapsed.",
   "Correct answer! \n\nDid you know: Near the end of the song, Withers holds a note for 18 seconds... 'Lovely Daaaaaaaaay.' ",
   "Correct answer! \n\nDid you know: Blink-182 bass player Mark Hoppus met his wife on the shoot for this songs' video.",
   "Correct answer! \n\nDid you know: In the Summer of '69, Bryan was 9 years old. He said of the song: 'It's a very simple song about looking back on the summertime and making love. For me, the 69 was a metaphor for making love not about the year.' ",
   "Correct answer! \n\nDid you know: The video was shot at a fast shutter speed to achieve the slow-motion. In order for Martin to sing along, he had to lip-sync to the song played at double speed.",
   "Correct answer! \n\nDid you know: This was the first Jackson 5 single released by Motown Records. It launched their career and went to #1 in the US, as did their next three releases: 'ABC,' 'The Love You Save' and 'I'll Be There.' ",
   "Correct answer! \n\nDid you know: For the recording of this track the drums were placed on the ground floor of a stairwell with the microphone hanging from the roof 3 stories up in order to capture the natural reverb of the space.",
   "Correct answer! \n\nDid you know: Noel Gallagher got the title when he misheard the name of the Pixies album Bossanova. He was watching a documentary about champagne at the time.",
   "Correct answer! \n\nDid you know: In 2014, Collins performed this at the Miami Country Day School in Miami, Florida, with his son's middle school band.",
   "Correct answer! \n\nDid you know: Queen guitarist Brian May wrote this song about a young man who comes to appreciate women of substantial girth. May said: 'I wrote it with Fred in mind, as you do especially if you've got a great singer who likes fat bottomed girls… or boys.' ",
   "Correct answer! \n\nDid you know: Wannabe is the best-selling single by an all-female group worldwide.",
   "Correct answer! \n\nDid you know: Because this song is sampled from The Rolling Stones song 'The Last Time', Mick Jagger and Keith Richards got composer credits along with Richard Ashcroft. Upset that he lost the royalties, Ashcroft said this was 'The best song Jagger and Richards have written in 20 years.' ",
   "Correct answer! \n\nDid you know: The rapper Tupac Shakur used this as the basis for his song 'Changes', which is a look at racism and urban life from a black perspective.",
   "Correct answer! \n\nDid you know: Springsteen played this for the first time on May 9. Rock critic Jon Landau was at the show and wrote in Boston's Real Paper: 'I saw rock and roll's future - and its name is Bruce Springsteen.' Landau eventually became Springsteen's manager.",
   "Correct answer! \n\nDid you know: Seven million global sales of the Gorillaz album earned the group an entry in The Guinness Book of Records as the world's most successful virtual band.",
   "Correct answer! \n\nDid you know: The Smiths had difficulty playing this song live. Guitarist Jonny Marr, in particular, struggled to recreate the guitar effect in concert. Bassist, Andy Rourke, called it 'the bane of The Smiths' live career.' ",
   "Correct answer! \n\nDid you know: The baby pictured on the front cover of The Notorious B.I.G's album 'Ready To Die' only realized his picture was used when he was 8 years old and said he was paid $150 for the 2 hour shoot.",
   "Correct answer! \n\nDid you know: This is one of the most misinterpreted songs ever. It is about an obsessive stalker, but it sounds like a love song. Some people even used it as their wedding song. The Police frontman Sting, wrote it after separating from his first wife, Frances Tomelty",
   "Correct answer! \n\nDid you know: The Stones former manager Allen Klein owned the publishing rights to this song. In 1965, The Stones hired him and signed a deal they would later regret. The Stones signed over the publishing rights to all the songs they wrote up to 1969. Every time this is used, Klein's estate gets paid.",
   "Correct answer! \n\nDid you know: Prince Harry and Meghan Markle chose this song as their first dance at the evening reception following their wedding.",
   "Correct answer! \n\nDid you know: The Bee Gees recorded this in a French studio called the Chateau D'Herouville. Later, the group learned that many porno films were shot in those studios."
];
let songs = [
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

let correctGuesses = [
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

let wrongGuesses = [
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
    ['Tupac', 'Don Henley', 'The Beach Boys'],
    ['The Rolling Stones', 'Matt Sartain', 'The Ramones'],
    ['Blur', 'D12', 'Franz Ferdinand'],
    ['New Order', 'Joy Division', 'Depeche Mode'],
    ['Dr.Dre', 'P.Diddy', 'Fat Man Scoop'],
    ['Dire Straits', 'Duran Duran', 'Genesis'],
    ['AC/DC', 'The Clash', 'The Beatles'],
    ['Tina Turner', 'Amy Winehouse', 'Mariah Carey'],
    ['The Monkeys', 'Abba', 'The Beach Boys']
];        

let facts = [
    "Correct answer! \n\nDid you know: Alanis Morissette's 1999 tour was sponsored by MP3.com. She received company stock in the deal, which was worth millions before the Internet bubble burst a year later. She did sell $1.5 million worth of the stock before it collapsed.",
    "Correct answer! \n\nDid you know: Near the end of the song, Withers holds a note for 18 seconds... 'Lovely Daaaaaaaaay.' ",
    "Correct answer! \n\nDid you know: Blink-182 bass player Mark Hoppus met his wife on the shoot for this songs' video.",
    "Correct answer! \n\nDid you know: In the Summer of '69, Bryan was 9 years old. He said of the song: 'It's a very simple song about looking back on the summertime and making love. For me, the 69 was a metaphor for making love not about the year.' ",
    "Correct answer! \n\nDid you know: The video was shot at a fast shutter speed to achieve the slow-motion. In order for Martin to sing along, he had to lip-sync to the song played at double speed.",
    "Correct answer! \n\nDid you know: This was the first Jackson 5 single released by Motown Records. It launched their career and went to #1 in the US, as did their next three releases: 'ABC,' 'The Love You Save' and 'I'll Be There.' ",
    "Correct answer! \n\nDid you know: For the recording of this track the drums were placed on the ground floor of a stairwell with the microphone hanging from the roof 3 stories up in order to capture the natural reverb of the space.",
    "Correct answer! \n\nDid you know: Noel Gallagher got the title when he misheard the name of the Pixies album Bossanova. He was watching a documentary about champagne at the time.",
    "Correct answer! \n\nDid you know: In 2014, Collins performed this at the Miami Country Day School in Miami, Florida, with his son's middle school band.",
    "Correct answer! \n\nDid you know: Queen guitarist Brian May wrote this song about a young man who comes to appreciate women of substantial girth. May said: 'I wrote it with Fred in mind, as you do especially if you've got a great singer who likes fat bottomed girls… or boys.' ",
    "Correct answer! \n\nDid you know: Wannabe is the best-selling single by an all-female group worldwide.",
    "Correct answer! \n\nDid you know: Because this song is sampled from The Rolling Stones song 'The Last Time', Mick Jagger and Keith Richards got composer credits along with Richard Ashcroft. Upset that he lost the royalties, Ashcroft said this was 'The best song Jagger and Richards have written in 20 years.' ",
    "Correct answer! \n\nDid you know: The rapper Tupac Shakur used this as the basis for his song 'Changes', which is a look at racism and urban life from a black perspective.",
    "Correct answer! \n\nDid you know: Springsteen played this for the first time on May 9. Rock critic Jon Landau was at the show and wrote in Boston's Real Paper: 'I saw rock and roll's future - and its name is Bruce Springsteen.' Landau eventually became Springsteen's manager.",
    "Correct answer! \n\nDid you know: Seven million global sales of the Gorillaz album earned the group an entry in The Guinness Book of Records as the world's most successful virtual band.",
    "Correct answer! \n\nDid you know: The Smiths had difficulty playing this song live. Guitarist Jonny Marr, in particular, struggled to recreate the guitar effect in concert. Bassist, Andy Rourke, called it 'the bane of The Smiths' live career.' ",
    "Correct answer! \n\nDid you know: The baby pictured on the front cover of The Notorious B.I.G's album 'Ready To Die' only realized his picture was used when he was 8 years old and said he was paid $150 for the 2 hour shoot.",
    "Correct answer! \n\nDid you know: This is one of the most misinterpreted songs ever. It is about an obsessive stalker, but it sounds like a love song. Some people even used it as their wedding song. The Police frontman Sting, wrote it after separating from his first wife, Frances Tomelty",
    "Correct answer! \n\nDid you know: The Stones former manager Allen Klein owned the publishing rights to this song. In 1965, The Stones hired him and signed a deal they would later regret. The Stones signed over the publishing rights to all the songs they wrote up to 1969. Every time this is used, Klein's estate gets paid.",
    "Correct answer! \n\nDid you know: Prince Harry and Meghan Markle chose this song as their first dance at the evening reception following their wedding.",
    "Correct answer! \n\nDid you know: The Bee Gees recorded this in a French studio called the Chateau D'Herouville. Later, the group learned that many porno films were shot in those studios."
];

const player = new Audio();

// - - - - - - - State Variables - - - - - - -

let score = 0;

let currentSong, randomSong, songsIdx, wrongGuessButtons;

let playIntroClicks = [];

// - - - - - - - Cached Elements - - - - - - -
// let restart = document.getElementById('restart');
// let welcome = document.querySelector('ul')
// let playProceed = document.querySelector('.play-proceed')
let startGame = document.getElementById('start-button');
// let start = document.getElementById('start-game');
// let listArea = document.getElementById('list-area')
// let messageFact = document.querySelector('ul');
// let message = document.querySelector('ul');
let playProceed = document.querySelector('.play-proceed');
// let start = document.getElementById('start-game');
let restartButton = document.createElement('button');

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
    document.getElementById('proceed').style.display = 'none';
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
    listArea = document.getElementById('list-area')
    listArea.innerHTML = '';
    correctGuessButton = document.createElement('div')
    correctGuessButton.className += 'button ';
    correctGuessButton.addEventListener('click', checkCorrectGuess);
    correctGuessButton.innerHTML = arrCorrect[songsIdx];
    buttons.push(correctGuessButton);
    arrCorrect.splice(songsIdx, 1);
    let wrongChoices = [];
    wrongChoices.push(...arrWrong[songsIdx])
    for(var i = 0; i < wrongChoices.length; i ++) {
        wrongGuessButtons = document.createElement('div');
        wrongGuessButtons.className += 'button ';
        wrongGuessButtons.className += 'wrong ';
        wrongGuessButtons.addEventListener('click', checkIncorrectGuess);
        wrongGuessButtons.innerHTML = wrongChoices[i];
        buttons.push(wrongGuessButtons);
        };
    arrWrong.splice(songsIdx, 1);     
    buttons = buttons.sort(function(a,b){return 0.5 - Math.random() });
    buttons.forEach(function(button){
    listArea.appendChild(button);
    });
};  

function checkCorrectGuess(evt){
    correctGuessButton.style.backgroundColor = 'green';
    score++;
    scoreBox.innerText =`Score:${score}`;
    setTimeout(function(){
        let messageFact = document.querySelector('ul');
        messageFact.innerText = facts[songsIdx];
        document.getElementById('proceed').style.display = 'block';
        facts.splice(songsIdx, 1);    
    }, 600);
};

function checkIncorrectGuess(evt){
    evt.target.style.backgroundColor = 'red';
    setTimeout(function(){
        let message = document.querySelector('ul');
        message.innerText = "That's incorrect!\n\n Hit Next Song to continue.";
        document.getElementById('proceed').style.display = 'block';
        facts.splice(songsIdx, 1);
    }, 600);
};

function endOfGame(arr1){
     if(arr1.length === 11){
      return true;
    };
};

function displayEndGameText(){
    let playProceed = document.querySelector('.play-proceed');
    playProceed.classList.add('hide');
    let restart = document.getElementById('restart');
    restart.classList.remove('hide');
    restartButton.innerText = 'Restart Game';
    restart.appendChild(restartButton);
    restartButton.addEventListener('click', function(){
        let start = document.getElementById('start-game');
        start.style.display = 'flex';
        score = 0;
        songsIdx = undefined;
        currentSong = undefined;
        randomSong = undefined; 
        wrongGuessButtons = undefined;
        scoreBox.innerText = `Score:${score}`;
        resetArrays();
        restartButton.parentNode.removeChild(restartButton);
        init();
    });


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
     };
  
};

function init(){
    let restart = document.getElementById('restart');
    restart.classList.add('hide');
    let welcome = document.querySelector('ul')
    welcome.innerText = "\n\nWelcome to Who's That! A game to test your musical knowledge of iconic tracks.\n \n The rules are simple, you get 2 chances to play the intro of the selected track, then pick your guess from the list. \n  \n When you're ready, turn your volume up and hit the start button, followed by the Play Intro button to begin! Good Luck!";
    playProceed.classList.add('hide')
    startGame.addEventListener('click', startGameButton);
};

function resetArrays(){
    songs = songsMaster.map(i => i)
    correctGuesses = correctGuessesMaster.map(i => i);
    wrongGuesses = wrongGuessesMaster.map(i => i);
    facts = factsMaster.map(i => i);
}

function startGameButton(){
    playIntroClicks = [];
    randomSongSelect(songs, correctGuesses);
    createGuessButtons(correctGuesses,wrongGuesses);
    let start = document.getElementById('start-game');
    start.style.display = 'none'
    playProceed.classList.remove('hide');
    document.getElementById('proceed').style.display = 'none';
    startGame.removeEventListener('click', startGameButton)
}

init();
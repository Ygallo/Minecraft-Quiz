/**
 * Create quiz questions
 */

let questions = [
{
    question: 'In what year was Minecraft fully released?',
    answerA: 2012,
    answerB:2011,
    answerC:2007,
    answerD: 2010,
    correct: 'answerB',
}, {
    question: 'How many players can play together, at the same time, on Minecraft Realms?', 
    answerA: 12,
    answerB: 8,
    answerC: 11,
    answerD: 10,
    correct: 'answerD',
}, {
    question: 'The game follows a day and night cycle. How long does one full cycle last in real-time?',
    answerA: '20 minutes',
    answerB: '30 minutes',
    answerC: '60 minutes',
    answerD: '10 minutes',
    correct: 'answerA',
}, {
    question: 'Which of the following cannot be tamed?',
    answerA: 'wolf',
    answerB: 'ocelot',
    answerC: 'chicken',
    answerD: 'horse',
    correct: 'answerC',
},/* {
    question: 'What item do you need to make all of the potions?',
    answerA: 'Water bottle',
    answerB:
    answerC:
    answerD: 
    correct: 'answerA',
},{
    question: 'Which species began due to a coding error?',
    answerA: 
    answerB:
    answerC:
    answerD: 'Creeper ',
    correct: 'answerD',
},{
    question: 'What must you use to mine ores and stones?',
    answerA:  ' Pickaxe',
    answerB:
    answerC:
    answerD: 
    correct: 'answerA'
},{
    question: 'To make one iron ingot, how many slabs of iron ore do you need?',
    answerA: 2,
    answerB: 0,
    answerC: 1,
    answerD: 5,
    correct: 'answerC'
},{
    question: 'Axolotl can come in how many different colors?',
    answerA: 5,
    answerB: 6,
    answerC: 2,
    answerD: 7,
    correct: 'answerA,
},{
    question: 
    answerA: 
    answerB:
    answerC:
    answerD: 
    correct: 
}*/
];

/**
 * Loads the questions on the page and loops through them
 * as the user aswers them
 */
function displayQuestions() {
    let radioA = document.getElementById("radioA");
    radioA.value = "algo";
    let labelA = document.getElementById('labelA');
    labelA.innerHTML  = 'New Text';

    let radioB = document.getElementById("radioB");
    radioB.value = "algoB";
    let labelB = document.getElementById('labelB');
    labelB.innerHTML  = 'New TextB';

    let radioC = document.getElementById("radioC");
    radioC.value = "algoC";
    let labelC = document.getElementById('labelC');
    labelC.innerHTML  = 'New TextC';

    let radioD = document.getElementById("radioD");
    radioD.value = "algoD";
    let labelD = document.getElementById('labelD');
    labelD.innerHTML  = 'New TextD';

    console.log(radioA.value);
    console.log(radioB.value);
    console.log(radioC.value);
    console.log(radioD.value)
}
displayQuestions();

function checkAnswer() {

}

function calculateCorrectAnswer() {
    
}

function incrementScore() {

}

function totalScore() {

}



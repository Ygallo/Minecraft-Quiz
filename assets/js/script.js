/**
 * Array of object with the quiz Questions
 */

 let quizQuestions = [
    {
        question: 'In what year was Minecraft fully released?',
        answerA: 2012,
        answerB: 2011,
        answerC: 2007,
        answerD: 2010,
        correct: 1,
    }, {
        question: 'How many players can play together, at the same time, on Minecraft Realms?', 
        answerA: 12,
        answerB: 8,
        answerC: 11,
        answerD: 10,
        correct: 3,
    }, {
        question: 'The game follows a day and night cycle. How long does one full cycle last in real-time?',
        answerA: '20 minutes',
        answerB: '30 minutes',
        answerC: '60 minutes',
        answerD: '10 minutes',
        correct: 0,
    }, {
        question: 'Which of the following cannot be tamed?',
        answerA: 'Wolf',
        answerB: 'Ocelot',
        answerC: 'Chicken',
        answerD: 'Horse',
        correct: 2,
    },/* {
        question: 'What item do you need to make all of the potions?',
        answerA: 'Water bottle',
        answerB: 'Gun powder',
        answerC: 'Blaze Powder',
        answerD: 'Nether Wart'
        correct: 0,
    },{
        question: 'Which species began due to a coding error?',
        answerA: 'Slime'
        answerB: 'Piglin'
        answerC: 'Drowned'
        answerD: 'Creeper ',
        correct: 3,
    },{
        question: 'What must you use to mine ores and stones?',
        answerA: 'Iron Pickaxe',
        answerB: 'Axe'
        answerC: 'Stone Pickaxe'
        answerD: 'Wooden Pickaxe'
        correct: 0,
    },{
        question: 'To make one iron ingot, how many slabs of iron ore do you need?',
        answerA: 2,
        answerB: 0,
        answerC: 1,
        answerD: 5,
        correct: 2,
    },{
        question: 'Axolotl can come in how many different colors?',
        answerA: 5,
        answerB: 6,
        answerC: 2,
        answerD: 7,
        correct: 0,
    },{
        question: 'Which creature has 2 hearts?',
        answerA: 'Chicken',
        answerB: 'Fish',
        answerC: 'Rabbit',
        answerD: 'Pig',
        correct: 0,
    }*/
    ];

let index = 0;    // Current question index

/**
 * Loads the quizQuestions on the page and loops through them
 * as the user aswers them
 */
 function displayQuestions() {
    
    let question = document.getElementById("question");
    question.innerHTML = quizQuestions[index].question;

    let radioA = document.getElementById("radioA");
    radioA.value = quizQuestions[index].answerA;
    let labelA = document.getElementById('labelA');
    labelA.innerHTML  = quizQuestions[index].answerA;

    let radioB = document.getElementById("radioB");
    radioB.value = quizQuestions[index].answerB;
    let labelB = document.getElementById('labelB');
    labelB.innerHTML  = quizQuestions[index].answerB;

    let radioC = document.getElementById("radioC");
    radioC.value = quizQuestions[index].answerC;
    let labelC = document.getElementById('labelC');
    labelC.innerHTML  = quizQuestions[index].answerC;

    let radioD = document.getElementById("radioD");
    radioD.value = quizQuestions[index].answerD;
    let labelD = document.getElementById('labelD');
    labelD.innerHTML  = quizQuestions[index].answerD;

    console.log(radioA.value);
    console.log(radioB.value);
    console.log(radioC.value);
    console.log(radioD.value);

  
}
displayQuestions();

function checkAnswer() {
    let selected;
    let radioSelected= document.getElementsByName("radio1");
     
    for( let i=0; i< radioSelected.length;i++)
    {
        if(radioSelected[i].checked){
            selected=i;
        }
    }

    if(quizQuestions[index].correct === selected){
        // hacer lo correta
        alert('correct');
        incrementScore()
    }else{
        alert('incorrect');
        incrementWrongAnswer();
    }
    //check if we have question left
    if(index<quizQuestions.length -1){
        index++;
        displayQuestions();
    }else{
        //no more question display game over
        index=0;
    }

}

function calculateCorrectAnswer() {
    
}

/**
 * Gets current score from the DOM and increments by 1
 */

function incrementScore() {

    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
}
/**
 * Gets current incorrect score from the DOM and increments by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}



function totalScore() {

}






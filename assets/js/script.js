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
    radioA.checked = false;
    let labelA = document.getElementById('labelA');
    labelA.innerHTML  = quizQuestions[index].answerA;

    let radioB = document.getElementById("radioB");
    radioB.value = quizQuestions[index].answerB;
    radioB.checked = false;
    let labelB = document.getElementById('labelB');
    labelB.innerHTML  = quizQuestions[index].answerB;

    let radioC = document.getElementById("radioC");
    radioC.value = quizQuestions[index].answerC;
    radioC.checked = false;
    let labelC = document.getElementById('labelC');
    labelC.innerHTML  = quizQuestions[index].answerC;

    let radioD = document.getElementById("radioD");
    radioD.value = quizQuestions[index].answerD;
    radioD.checked = false;
    let labelD = document.getElementById('labelD');
    labelD.innerHTML  = quizQuestions[index].answerD;
  
}

displayQuestions(); //first question displayed

/**
 * Checking the selected if there is a selected answer,
 * and if the answers is right or wrong
 */

function checkAnswer() {
    let selected;
    let radioSelected= document.getElementsByName("radio1");
    let unchecked=0;

    //checking which radio was selected
    for( let i=0; i< radioSelected.length;i++)
    {
        if(radioSelected[i].checked){
            selected=i;
        }else{
            unchecked++;
        }
    }

    //checkin if a radiobutton is selected otherwise exiting this function
    if(unchecked===radioSelected.length){
        alert("Please select a answer");
        return;
    }

        if(quizQuestions[index].correct === selected){
            incrementScore()
        }else{
            incrementWrongAnswer();
        }

        //progress bar update
        progressBar();

        //check if we have questions left
        if(index<quizQuestions.length -1){
            index++;
            displayQuestions();
        }else{
            //no more question display game over
        // index=0;
        // resetScore();
            //displayQuestions();
        // progressBar();
        displasFinalScreen();
        }

}


function displasFinalScreen() {
 console.log('finished');
    // getting scores
    let finalIncorrectScore = parseInt(document.getElementById('incorrect').innerText);
    let finalCorrectScore = parseInt(document.getElementById('correct').innerText);

     let cont = document.getElementById("quizCont");
     cont.innerHTML =`<div id="finalScreen"> <h2 id= "congrats" class="end-quiz">Congratulations!</h2> 
     <p id="complete" class="end-quiz">You completed the quiz </p>
     <div id="final-score" class="end-quiz">You got ${finalCorrectScore} correct Answers and ${finalIncorrectScore} incorrect </div>
     
     <input id="play-again" type="submit" id="submit" value="Play Again" onclick="PlayAgain()">
     </div>`;
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

/**
 * Resets the score to 0 once all questions are answered
 */

function resetScore() {

    document.getElementById('correct').innerText = 0;
    document.getElementById('incorrect').innerText = 0;
}

/**
 * Shows the progress of the game as the user advance with the questions
 */

function progressBar() {

    let bar = document.getElementById('my-bar');
    let progress = (index/quizQuestions.length)*100;
    bar.style.width = progress + "%";
}

/**
 * Restore the Quiz html to play the game again
 */
function PlayAgain(){
    index=0; //get to the first question
    let cont = document.getElementById("quizCont");
     cont.innerHTML =`
     <div class="container">
            <h2 id="question">Question</h2>
            <input type="radio" id="radioA" class="radio.btn" name="radio1" value="A">
            <p id="labelA" class="options">A</p><br>
            <!--<label for="radioA" id="labelA">A</label><br>-->
            <input type="radio" id="radioB" class="radio.btn" name="radio1" value="B">
            <p id="labelB" class="options">B</p><br>
            <!--<label for="radioB" id="labelB" >B</label><br> -->
            <input type="radio" id="radioC" class="radio.btn" name="radio1" value="C">
            <p id="labelC" class="options">C</p><br>
            <!--<label for="radioC" id="labelC">C</label><br>-->
            <input type="radio" id="radioD" class="radio.btn" name="radio1" value="D">
            <p id="labelD" class="options">D</p><br>
            <!--<label for="radioD" id="labelD">D</label><br>-->
            <input type="submit" id="submit" onclick="checkAnswer();">
        </div>
        <div class="score-area">
            <p class="scores"><i class="fa-sharp fa-solid fa-square-check"></i>Correct Answers <span id="correct">0</span></p>
            <p class="scores"><i class="fa-sharp fa-solid fa-square-xmark"></i>Incorrect Answers <span id="incorrect">0</span></p>
        </div>

        <div id="progress-bar">
            <div id="my-bar"></div>
        </div>`;
       displayQuestions();
}





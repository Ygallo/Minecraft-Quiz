document.addEventListener("DOMContentLoaded",attachEvents);

function attachEvents(){
    let options = document.getElementsByClassName("options");
    let radio = document.getElementsByName("radio1");

    for (let i=0; i< options.length; i++) {
        options[i].addEventListener ("click",function(){
            //cheque el radio button de ese paragraph
            radio[i].checked = true;
        } );
        
    }
};



/**
 * link to the .json file with the quiz Questions
 */
let quizQuestions;

fetch("./questions.json")
 .then((response) => response.json())
 .then((json) => {
   quizQuestions = json;
   displayQuestions(); //first question displayed
 });
 
 
let index = 0;    // Current question index

/**
 * Loads the quizQuestions on the page and loops through them
 * as the user aswers them
 */
 function displayQuestions() {
    //console.log(quizQuestions);
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
    let progress = ((index+1)/quizQuestions.length)*100;
    bar.style.width = progress + "%";
}

/**
 * Restore the Quiz html to play the game again
 */
function PlayAgain(){
    index=0; //get to the first question
    let cont = document.getElementById("quizCont");
     cont.innerHTML =`
     <div id="progress">
            <div class="score-area">
                <p class="scores"><i class="fa-sharp fa-solid fa-square-check"></i>Correct Answers <span id="correct">0</span></p>
                <p class="scores"><i class="fa-sharp fa-solid fa-square-xmark"></i>Incorrect Answers <span id="incorrect">0</span></p>
            </div>

            <div id="progress-bar">
                <div id="my-bar"></div>
            </div>
     </div>
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
        </div>`;
       displayQuestions();
       attachEvents();
}





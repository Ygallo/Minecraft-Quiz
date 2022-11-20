document.addEventListener("DOMContentLoaded",attachEvents);

function attachEvents(){
    let options = document.getElementsByClassName("options");
    let radio = document.getElementsByName("radio1");

    for (let i=0; i< options.length; i++) {
        options[i].addEventListener ("click",function(){
            //checks the radio button of paragraph
            radio[i].checked = true;
            checkIfOtherIsSelected(i);
            options[i].classList.add("answer-selected");
        } );
        
    }
}

function checkIfOtherIsSelected(current){
    let options = document.getElementsByClassName("options");
    for (let i=0; i< options.length;i++){
        if(i!==current){
            // i dont remov
            options[i].classList.remove("answer-selected");
        }
    }
}
/**
 * link to the .json file with the quiz Questions
 * Shuffles and loads first question
 */
let quizQuestions;

fetch("./questions.json")
 .then((response) => response.json())
 .then((json) => {
   quizQuestions = json;
   
   shuffle(quizQuestions);
   
   displayQuestions(); //first question displayed
 });
 

 function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

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

/**
 * Checking the selection, if there is a selected answer,
 * and if the answers is right or wrong
 */

function checkAnswer() {
    let selected;
    let options = document.getElementsByClassName("options"); //paragraph
    let radioSelected= document.getElementsByName("radio1");
    let unchecked=0;

    //checking which radio was selected
    for( let i=0; i< radioSelected.length;i++)
    {
        options[i].classList.remove("answer-selected");// resets all seletect paragraphs
        if(radioSelected[i].checked){
            selected=i;
            //options[i].classList.add("answer-selected");
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
            incrementScore();
        }else{
            incrementWrongAnswer();
        }

        //progress bar update
        progressBar();

        let maxLimit=0;
        // check how many question I have
        if(quizQuestions.length>10){
            maxLimit=10;
        }else{
            maxLimit=quizQuestions.length;
        }
        //check if we have questions left
        if(index<maxLimit -1){
            index++;
            displayQuestions();
        }else{
            //no more question display game over
        displasFinalScreen();
        }
}
/**
 * If game is finished, display final screen, and scores.
 */
function displasFinalScreen() {
 console.log('finished');
    // getting scores
    let finalIncorrectScore = parseInt(document.getElementById('incorrect').innerText);
    let finalCorrectScore = parseInt(document.getElementById('correct').innerText);

     let cont = document.getElementById("quizCont");
     cont.innerHTML =`<div id="finalScreen"> <h2 id= "congrats" class="end-quiz">Congratulations!</h2> 
     <p id="complete" class="end-quiz">You completed the quiz </p>
     <div id="final-score" class="end-quiz">You got ${finalCorrectScore} correct answers and ${finalIncorrectScore} incorrect </div>
     
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
    let progress = ((index+1)/10)*100;
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
                <p class="scores"><i d="wrong" class="fa-sharp fa-solid fa-square-xmark"></i>Incorrect Answers <span id="incorrect">0</span></p>
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
    shuffle(quizQuestions);
    displayQuestions();
    attachEvents();
}





// Totally True Trivia 

//Create Trivia Questions
const triviaQuestions = [
    {
      question: "Which is the only American state to begin with the letter 'p'?",
      answers: {
        a: "Pittsburgh",
        b: "Pennsylvania",
        c: "Pheonix"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the world's biggest island?",
      answers: {
        a: "Hawaii",
        b: "Cuba",
        c: "Madagascar",
        d: "Greenland"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the world's largest ocean?",
      answers: {
        a: "Arctic Ocean",
        b: "Pacific Ocean",
        c: "Atlantic Ocean",
        d: "Indian Ocean"
      },
      correctAnswer: "b"
    }
  ];


//Display trivia questions
    
//Set timer
setTimeout (timer, 1000 * 120);

//function timer();

/*function timer () {
        Math.floor((1000 * 120) / 1000);
}*/

//When the start buttom is clicked, display time remaining to play and display the quiz
$( "#start-button" ).on( "click", function () {
    $( "#timer" ).text( "Time Remaining:" + timer );
    //$( "#quiz" ).html(Object.values(triviaQuestions));
    $.each(triviaQuestions, function(question, answer) {
        $( "#quiz" ).html(triviaQuestions);
    });
});






//Clear quiz if timer expires
/*if (timer <= 0) {
    $( "#dynamic" ).empty; 
    $( "#dynamic" ).html("oops!");
}; */



//Create function on-click to submit answers
//submitButton.on("click", showResults);

//Function to Evaluate Answers

//Display Score
    //Correct Answers:
    $( "#results" ).html(
        //create list
        //add correct answers li 
        //add incorrect ansers li
        //add unaswered questions li
    );
   
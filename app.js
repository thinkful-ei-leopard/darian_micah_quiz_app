0
const myQuestions = [
	{
	 'question':	'What is the name of the city where the cartoon family The Simpsons live?',
	 'answers': ['Fallfield','Portland','Springfield','Atlanta'],
	 'correct': 2
	},
	{
	 'question': 'What is the name of the fairy in Peter Pan?',
	 'answers': ['Susan','Tinkerbell','Crysta','Tara'],
	 'correct':  1
	},
	{
	 'question': 'Which is the tallest mammal?',
	 'answers': ['Human', 'Gazelle','Elephant','Giraffe'],
	 'correct':  3
	},
	{
	'question': 'Which planet is the closest to Earth?',
	'answers': ['Venus', 'Mars', 'Uranus', 'Jupiter'],
	'correct':  0
	},
	{
	'question': 'Which fictional city is the home of Batman?',
  'answers': ['Metropolis','Star City','Gotham City','Arkham'],
	'correct': 2
	}
	];

let score = 0;
let current = 0;

$(document).ready(function(){
  // Create an event listener to listen for a click on the Start Quiz button
  $(".start-button").click(function(){
     $('.start-quiz').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.score').text('Current Score: '+score);
    console.log("Start Quiz button clicked");
  });
  
  // Create an event listener to listen for a click on the Next button
  $(".next-button").click(function(event){
    console.log("Next button clicked");
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });
  
  $(".submit-button").click(function(event){
    if($('li.selected').length){
      let answer = $('li.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer');
    }
  });
  
  // Create an event listener to listen for a click on the Retake button and refresh the page
  $(".retake-button").click(function(){
  location.reload();
    console.log("Retake button clicked");
  });
  
  //Click listener when clicking on a list item to change the color of the background
  $('ul.list').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  
});

//***************FUNCTIONS**************
function displayQuestion(){
  $('.question-number').text('Question Number: '+(current + 1)+"/5" );
  if(current < myQuestions.length){
    let listQuestion = myQuestions[current];
    $('h2').text(listQuestion.question);
    $('ul.list').html('');
    for (let i = 0; i < listQuestion.answers.length; i++) {
      $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
    }
  } else {
    // show summary that says how many you got correct
    displayScore();
  }
}

// Checks answer from the array to see if the one chosen is the one that is correct
function checkAnswer(answers){
  let listQuestion = myQuestions[current];
  if(listQuestion.correct == answers){
    score++;
    $('li.selected').addClass('correct');
  } else {
    $('li.selected').addClass('incorrect');
  }
  $('.score').text('Current Score: '+score);
  current++;
}

function incorrectAnswer(correct) {
  let listQuestion = myQuestion[current];
  if(list.listQuestion.incorrect !== answer){
    return $(listQuestion.correct).addClass('correct');
  }

}

function showCorrectAnswer(answer) {
  let listQuestion = myQuestions[current];
  if (listQuestion.correct !== answer)
    $('li.selected').addClass('correct');
}

//Display score
function displayScore(){
  $('.questions').hide();
  $('.end-quiz').show();
  $('.end-score').text("Your score is: " +score + '/5');
  if(score >= 3){
    $('.comment').text('GREAT JOB!');
  }
}
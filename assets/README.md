# Project Title
JavaScript Quiz
# Motivation/Description
This was an assignment during Persevere's boot camp. The basis was simple enough: create a multiple choice quiz.  It was created using HTML, CSS, and Javascript.  This project was a big step for me at the time because of the way I used HTML.  The majority of the HTML work is done within the Javascript, which is simple enough now, but at the time it felt like launching rockets!  Usually as I'm planning or coding I have a "gotcha" moment when I know almost exactly how things need to go, and I wasn't having that experience with this one.  When my instructor told me to only have one HTML page and manipulate it within the Javascript the rest of the code almost wrote itself.  
# User Story
I see an intro page with directions.
Upon clicking start I see a running timer and a bar that tells me what my progress is on the quiz.
After reading the question I am able to choose an answer by clicking on it and submit it using the submit button.
When I am finsihed with the questions I see a score page where I am directed to enter a username, and see buttons for saving the score, retaking the quiz, or studying more.
When I enter a username and submit my score it is saved to the page.
# Acceptance Criteria
Does my quiz have an opening page with brief instructions?
Do my questions, timer, and progress bar update upon submission?
Is my score saved when I enter a username and submit?
# Build Status
Build status is operationally complete and free of bugs.
# Screenshots
* Opening page
![](assets/images/quizIntro.jpg)
* Taking the quiz
![](assets/images/quizQuiz.jpg)
* Score page
![](assets/images/quizScoring.jpg)
# Tech/Framework Used
HTML, CSS, Javascript, JQuery, and Bootstrap were used in this project.
# Features
Featurs that were added to the project that were not required are a progress bar and running timer.  
# Code Examples
The crux of the quiz is how the questions and answers are set up using a class.  The code below dictates what is put on the page and how the score is determined.

//class constructor for questions, answers, and methods
class TestQuestion {
    constructor(question, answers, index) {
        this.question = question,//the question being asked
            this.answers = answers//an array with the answers
        this.index = index//the index of the correct answer
    }
    addToDoc() {
        questionLocation.innerHTML = this.question
        oneQ.innerHTML = this.answers[0]
        twoQ.innerHTML = this.answers[1]
        threeQ.innerHTML = this.answers[2]
        fourQ.innerHTML = this.answers[3]
    }
}
# Installation
No installation necessary
# API Reference
Bootstrap- https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
Jquery- https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
# Contribute
# Credits
My buddy Jatavius Towns is an ever present force in my coding life.  While I can't point to any specific snippet he contributed directly, his willingness to discuss code and troubleshoot my code is always to be credited in my work.
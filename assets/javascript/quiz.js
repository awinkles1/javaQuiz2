//sets a counter for quiz and score
let loopy = 0
let score = 0
let finalScore;

//this is the intro variable
let intro = document.getElementById("introduction")

//this is the directions variable
let directions = document.getElementById("directions")

//this is the quiz variable
let quizPage = document.getElementById("quizPage")
quizPage.style.display = "none"

//this is the score variable
let scorePage = document.getElementById("scorePage")
scorePage.style.display = "none"

//this is the begin button
document.getElementById("beginQuiz")

//this info feeds the timer
let timer = document.getElementById("timer")
let defaultTime = 120
timer.innerHTML = defaultTime

//array that holds all the questions created using TestQuestion
let questionBank = []

//progress variable
let progress = document.getElementById("progress")

//html variable for question
let questionLocation = document.getElementById("javaQuestion")

//submit button
let submit = document.getElementById("submit")

//score output
let scoreOutput = document.getElementById("scoreOutput")
scoreOutput.style.color = "white"
//take again button
let takeAgain = document.getElementById("takeAgain")

//html variables for answer choices
let oneQ = document.getElementById("javaAnswer1")
let twoQ = document.getElementById("javaAnswer2")
let threeQ = document.getElementById("javaAnswer3")
let fourQ = document.getElementById("javaAnswer4")

//variables for radio buttons
let oneAns = document.getElementById("oneAns")
let twoAns = document.getElementById("twoAns")
let threeAns = document.getElementById("threeAns")
let fourAns = document.getElementById("fourAns")
let allAns = [oneAns, twoAns, threeAns, fourAns]
//checker array holding true and false values
let checked = []

//username input
let userName = document.getElementById("userName")
userName.style.color = "black"
userName.style.padding = "1%"
//score submission
let submitScore = document.getElementById("submitScore")

//study more button
let studyMore = document.getElementById("studyMore")

//list of winners info
let winner = document.getElementById("winner")

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

//question variables added to class
let question1 = new TestQuestion("In JavaScript, what primitive data type would be used to store a true or false value?", ["Number", "Object", "Boolean", "String"], 2)
questionBank.push(question1)
let question2 = new TestQuestion("What JavaScript method performs an action on each element inside an array?", [".concat()", ".map()", ".reduce()", ".includes()"], 1)
questionBank.push(question2)
let question3 = new TestQuestion("Which operator in JavaScript returns the remainder of two numbers?", ["%", "/", "*=", "**"], 0)
questionBank.push(question3)
let question4 = new TestQuestion("What is the correct operator to increment a value by 1?", ["*1", "+=", "$1", "++"], 3)
questionBank.push(question4)
let question5 = new TestQuestion("Which data type uses key/value pairs to store data?", ["object", "array", "string", "Boolean"], 0)
questionBank.push(question5)
let question6 = new TestQuestion("Which method gives the first instance of a character?",[".length()",".match()",".charAt()",".indexOf()"], 3)
questionBank.push(question6)
//directions on intro page that contain test info
let introPage = document.getElementById("introPage")
introPage.innerHTML = `The JavaScript Quiz is comprised of ${questionBank.length} questions. You have ${defaultTime} seconds to complete the quiz. Please read the question carefully and then choose your answer. Once completed, fill in your
name to save your score.`

//this function controls the timer on the pages containing questions
function startTimer() {
    let x = loopy
    let y = finalScore
    let seconds = parseInt(timer.innerHTML)
    //this part makes sure that the id timerDisplay is always one less than before while the function is running
    timer.innerHTML = --seconds
    //this part of function makes sure that the seconds are updated each second
    if (seconds) {
        setTimeout(function () {
            startTimer();
        }, 1000);
    } if (seconds < 11) {//alerts user 10 seconds remaining in quiz
        timer.style.backgroundColor = "red"
    } if (seconds === 0 && loopy < questionBank.length){//records score and stops quiz if time runs out
        alert("Time expired")
        submitScore.disabled = true
        quizPage.style.display = "none"
        scorePage.style.display = "block"
        finalScore = ((100 / questionBank.length) * score).toFixed(1)//calculates score to a percent
        if (finalScore >= 80){
            scoreOutput.innerHTML = `Great job! You got ${finalScore}% correct`
        }else scoreOutput.innerHTML = `You got ${finalScore}% correct.  Really?`
    }
}

//function to save score and leave output
const saveScore = () => {   
    submitScore.disabled = true
    let x = userName.value//user input
    const newUser = document.createElement("li")//new list element
    const newLine = document.createTextNode(`${x}  ${finalScore}%`)//text to go inside the new list element
    newUser.appendChild(newLine)//adding the text to the element
    const newOutput = winner//accessing the id winner
    newOutput.appendChild(newUser)//adding the list element to the list
    newUser.appendChild(newLine)//adding the text to the element
}
//function that runs when submit is pressed
const checker = () => {
    checked = []
    for (let i = 0; i < allAns.length; i++) {//creates an array of true/false values
        checked.push(allAns[i].checked === true)
    }console.log(checked)//the index of true is matched to the index declared in the constructor
    
    if (checked.indexOf(true) === questionBank[loopy].index) {//checks value of radio buttons and adjusts score accordingly
        score = score + 1
    }
    oneAns.checked = false//resets all radio buttons to false so the previous answer isn't checked
    twoAns.checked = false
    threeAns.checked = false
    fourAns.checked = false
    ++loopy//adds one to the quiz loop
    if (loopy === questionBank.length) {//check to see if questions are completed and sends user to score page
        finalScore = ((100 / questionBank.length) * score).toFixed(1)//calculates % correct
        quizPage.style.display = "none"
        scorePage.style.display = "block"
        if (finalScore >= 80){
            scoreOutput.innerHTML = `Great job! You got ${finalScore}% correct`
        }else scoreOutput.innerHTML = `You got ${finalScore}% correct.  Really?`
        if (userName.innerHTML === ''){
            submitScore.disabled = true
        }
    } else//if there are more questions the quiz continues
        quiz()
}
//function that runs when quiz page is loaded
const quiz = () => {
    directions.style.display = "none"//loses the directions page
    scorePage.style.display = "none"
    quizPage.style.display = "block"//displays quiz info
    questionBank[loopy].addToDoc()//uses test class to load questions according to value of loopy
    progress.innerHTML = `${loopy + 1}/${questionBank.length}`
    
}
const again = () => {
    submitScore.disabled = false//disables the submit button
    timer.style.backgroundColor = "white"//changes timers color from red to white
    userName.value = null//empties the username input
    loopy = 0
    score = 0
    finalScore = 0
    if (timer.innerHTML == 0) {
        timer.innerHTML = defaultTime
        startTimer()
        quiz()
    }else 
    timer.innerHTML = defaultTime
    quiz()
    
}
const enableScore = () => {//makes sure nothing can be submitted to page without a username
    let x = event.key
    if (x !== ''){
        submitScore.disabled = false
    }
}
//event listeners for buttons
submit.addEventListener("click", checker)
beginQuiz.addEventListener("click", quiz)
beginQuiz.addEventListener("click", startTimer)
submitScore.addEventListener("click", saveScore)
takeAgain.addEventListener("click", again)
userName.addEventListener("keydown", enableScore)









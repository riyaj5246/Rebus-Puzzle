/**
 * Created by rcortez on 10/12/2018.
 */
    //these following 5 arrays contain the data for 300 point and 400 point question types
var level3Questions =[
    'A, C, E, G, __ ',
    '1,1,2,3,5,8, __ ',
    '90, 81, 72, 63, __',
    '6, F, 2, B, 10, __ ',
    '1234, 4123, 3412, __ ',
    '4, 16, 36, 64, __ ',
    '41, 37, 33, 29, __ ',
    'A, Z, B, Y, __ ',
    'A, E, I, O, __ ',
    '2, 5, 14, 41, __ ',
    '16, 35, 54, 73, __ ',
    '1, 10, 11, 100, 101, 110, __ ',
    '200, 100, 50, __ ',
    '225, 196, 169, 144, __ ',
    'Z, 25, X, 23, V, 21, __ ',
    '90, 180, __, 360 ',
    'S, M, T, W, __ ',
    '31, 28, 31, 30, __ ',
    '1, 3, 9, 27, __ ',
    'J, F, M, A, __ ' ];
var level3Answers = [  'I',
    '13',
    '54',
    'J',
    '2341',
    '100',
    '25',
    'C',
    'U',
    '122',
    '92',
    '111',
    '25',
    '121',
    'T',
    '270',
    'T',
    '31',
    '81',
    'M' ];
var level3Hints = ['maybe the letters correspond to values',
    'heard of fibonacci?',
    'simple math sequence ',
    'each letter corresponds to the number before it',
    'try messing with the digits',
    ' start by square rooting everything',
    'simple math sequence',
    ' starting at the ends and moving in',
    ' the five most important letters',
    'it’s a two step math sequence' ,
    'look at the first and second digits separately, and maybe you find a pattern',
    'think binary',
    'simple math sequence ',
    'do you know your square roots?',
    'it’s the alphabet (but backwards)',
    ' simple math sequence ',
    'think of a week',
    'days in a month',
    'try raising 3 to the power of something ',
    'think months in a year'    ];
var level4questions = [
    'Abby is 6 years older than John. 6 years ago, she was twice as old as him. How old is Abby now? (No units, just answer)',
    'There are two numbers whose sum is 72. One is twice the other. What is the smaller number?',
    'Train A leaves LA for Chicago at a rate of 40 mph. Two hours later, Train B leaves from LA to go to Chicago at a rate of 60 mph. How long before Train B catches up with Train A? (Answer in hours, but don’t include units, just write answer)',
    'Mixture A, containing 6% of vinegar is going to be mixed with 2 quarts of Mixture B, containing 15% vinegar in create a solution with 12% vinegar. How many quarts of mixture A is needed for this? (No units, just answer)',
    'Think of a number. Double the number. Subtract 6 from the result, and then divide by two. The quotient is 20, so what is the number?',
    'Jay’s father is twice as old as Jay. In 20 years, Jay will be ⅔’s as old as his dad. How old is Jay currently? (Answer in years, but don’t include units)',
    'Family A is on a trip with family B. One day, family A gets separated, and so family B is 20 miles ahead of family A, on the same road. If family B travels at 60 mph and family A travels at 50 mph, how much time before family A catches up to family B? (Answer in hours, but don’t include units.)',
    'Bob and Harry are both electricians. Bob gets paid $14 per hour and Harry gets paid $12 an hour. Bob worked 10 more hours than Harry. If their total monthly income was $3520, for how many hours did the two work for, collectively? (No units in answer)',
    'Suppose one painter can paint the entire house in twelve hours, and the second painter takes eight hours to paint a similarly-sized house. How long would it take the two painters together to paint the house?(Answer in terms of MINUTES, no units in answer)',
    'The length of a rectangle is 3 less than 4 times the width. The perimeter is 34. Find the length.'
];
var level4Answers = [
        '18',
        '24',
        '4',
        '1',
        '23',
        '20',
        '2',
        '270',
        '288',
        '13'];

//the following two arrays contain all the pictures/puzzles. Used puzzles are spliced from picts, whereas picts2 keeps all puzzles to maintain index values.
var picts = [
    "resources/alloveragain.gif",
    "resources/firstaid.gif",
    "resources/splitpersonality.gif",
    "resources/summary.gif",
    "resources/thunderstorm.gif",
    "resources/breakfast.gif",
    "resources/onceinabluemoon.gif",
    "resources/painlessoperation.gif",
    "resources/tickledpink.gif",
    "resources/topsecret.gif"];
var picts2 = [
    "resources/alloveragain.gif",
    "resources/firstaid.gif",
    "resources/splitpersonality.gif",
    "resources/summary.gif",
    "resources/thunderstorm.gif",
    "resources/breakfast.gif",
    "resources/onceinabluemoon.gif",
    "resources/painlessoperation.gif",
    "resources/tickledpink.gif",
    "resources/topsecret.gif"];

var puzzle=""; //current puzzle value
var usedHints = []; //array to store index values of completed values
var dashes; //variable to store the length of "puzzle"
var gold = 0; //counts gold, which is gained with correctly answering questions and is used for hints
var totalPts = 0; //cumulative points, which are never lost
var totalGuesses; //stores number of guesses for one puzzle
var puzzNum; //stores an index number to determine which puzzle is asked
var firstTry = 0; //stores number of puzzles solved on first try
var correctLevel3 = true; //needed to ensure that 300 point questions stay the same until correctly answered
var correctLevel4 = true; //needed to ensure that 400 point questions stay the same until correctly answered
var prevXlvl3; //stores previous x value for 300 point questions just in case user answers incorrectly
var prevXlvl4; //stores previous x value for 400 point questions just in case user answers incorrectly

//start() needed to generate a fresh puzzle
function start(){
        if(picts.length == 0) //code for when all the puzzles have been completed
        {
            alert("Yay! You finished all the puzzles.");
            document.getElementById("score").innerHTML = "Here are how many you got on first try: "+ firstTry + "/10"; //displays all the puzzles completed on first try
        }
        else //code for when there are still puzzles left
        {
            usedHints = []; //new puzzle, so used hints is set back to 0
            totalGuesses = 0; //new puzzle, so total guesses is set back to 0
            var i;
            dashes = ""; //each puzzle has a different length of dashes
            puzzNum = randNum(0, picts.length - 1); //randomly assigns an index value out of all the puzzles still left
            document.getElementById('pict').style.backgroundImage = "url(" + picts[puzzNum] + ")"; //displays this puzzle, though it is hidden behind the button
            puzzle = (picts[puzzNum].substring(10, picts[puzzNum].length - 4)); //assigns the actual puzzle name by taking out the unnecessary part of the string
            //for loop generates as many dashes as the length of the puzzle
            for (i = 0; i < puzzle.length; i++) {
                dashes = dashes + "_ ";
                usedHints.push(0);
            }
            //sets all buttons back to visible, as in past puzzle, they could have been answered and become invisible
            document.getElementById("b1").style.visibility = "visible";
            document.getElementById("b2").style.visibility = "visible";
            document.getElementById("b3").style.visibility = "visible";
            document.getElementById("b4").style.visibility = "visible";
            document.getElementById("b5").style.visibility = "visible";
            document.getElementById("b6").style.visibility = "visible";
            document.getElementById("b7").style.visibility = "visible";
            document.getElementById("b8").style.visibility = "visible";
            document.getElementById("b9").style.visibility = "visible";
            document.getElementById("word").innerHTML = dashes; //displays dashes for puzzle
            picts.splice(puzzNum, 1); //takes out the puzzle that was just used from the array, so it is not repeated in the future
        }
}

//hint() works with the hint button in order to provide non-repeating hints
function hint(){
    if(gold >= 50) //if statement needed as in order to purchase hints, user must have gold
    {
        var hintSpot = randNum(0,puzzle.length-1); //generates a random spot for hint
        dashes = ""; //since the string needs to be changed, with the hint, this resets the string

        //following lines are needed to ensure that hints don't repeat
        while(usedHints[hintSpot] == 1){
            hintSpot = randNum(0,puzzle.length - 1);
        }
        usedHints[hintSpot] = 1;

        //this loop generates the new string, with dashes and the hint
        for(i=0; i<puzzle.length; i++) { //makes sure its the length of the puzzle
            if (usedHints[i] == 0) { //determines if a position is still a blank or a hint
                dashes = dashes + "_ "; //if its a blank position
            }
            else {
                dashes = dashes + puzzle.substring(i, i + 1); //if its a hint
            }
        }
        document.getElementById("word").innerHTML = dashes; //displays the hint
        gold = gold - 50; //subtracts gold
    }
    else{
        alert("Sorry, not enough gold for a hint...keep working"); //displayed if not enough gold
    }
    document.getElementById("gold").innerHTML ="Gold: "+ gold; //shows updated gold amount
}

//this function simply generates a random number when given a minimum and maximum parameter
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//this function asks the questions and assigns points
function quest(buttonId, points){
    if(picts.length >= 10){ //makes sure that user isn't asking any questions before calling start()
        start();
    }
    //variables needed to determine the question
    var x;
    var y;
    //variables needed to evaluate answer
    var userGuess; //the user's answer
    var correctAns; //the correct answer

    switch (points) { //this case statement determines what type of question is asked based on point value
        case 100 : //if 100 points
            //generates two random numbers between 5 and 10
            x = randNum(5, 10);
            y = randNum(5, 10);

            userGuess = parseInt(prompt("what is " + x + " + " + y + " ?")); //asks users the sum of the two numbers
            correctAns = x + y; //sets correct answer to the sum
            break;

        case 200 : //if 200 points
            //generates two random numbers between 8 and 15
            x = randNum(8, 15);
            y = randNum(8, 15);

            userGuess = parseInt(prompt("what is " + x + " * " + y + " ?")); //asks users what the product of the numbers is
            correctAns = x * y; //sets correct answer to the product
            break;

        case 300 : //if 300 points
            if (correctLevel3 == true) { //makes sure that the last 300-point question asked in this puzzle was correctly answered
                x = randNum(0, level3Questions.length - 1); //generates a new question from the specific array
                prevXlvl3 = x; //stores this question just in case user gets it wrong first time
            }
            else { //happens if user got the 300 point question wrong (they don't get a new one until they get it right
                x = prevXlvl3; //displays the same question
            }
            userGuess = prompt("Complete the sequence: " + level3Questions[x]); //prompts the question
            userGuess = userGuess.toString(); //converts the answer to a string, since all the answers are originally integers
            correctAns = level3Answers[x]; //retrieves the correct answer from another array with answers (same index values)
            break;

        case 400 : //if 400 points, same process as the process for 300 points, only difference are the arrays used
            if (correctLevel4 == true) {
                x = randNum(0, level4questions.length - 1);
                prevXlvl4 = x;
            }
            else {
                x = prevXlvl4;
            }
            userGuess = prompt('Answer this question: '+ level4questions[x]);
            userGuess = userGuess.toString();
            correctAns = level4Answers[x];
            break;
    }
    //this if statement is to evaluate user answer
    if (userGuess == correctAns) { //checks if user entered in the correct answer
        //if it's correct...
        alert("correct!");
        document.getElementById(buttonId).style.visibility = "hidden"; //hides the button so the puzzle piece is showing
        totalPts = totalPts + points; //adds points to the total point value based on difficulty of question
        gold = gold + points / 4; //adds 1/4th of the point value to the gold value

        switch (points) { //this case statement needed for specific actions needed for 300-400 point questions
            case 100 :
                break;
            case 200 :
                break;
            case 300 :
                //takes out the question, answer, and hint from the respective arrays, as this question has already been used up
                level3Questions.splice(x, 1);
                level3Answers.splice(x, 1);
                level3Hints.splice(x, 1);

                correctLevel3 = true; //setting this variable to true will ensure that the next time the 300 buttons are clicked, there will be a new question
                break;

            case 400 :
                //takes out the question and answer from the respective arrays, as this question has already been used
                level4questions.splice(x, 1);
                level4Answers.splice(x, 1);

                correctLevel4 = true; //setting this variable to true will ensure that the next time the 400 button is clicked, there will be a new question
                break;
        }
    }
    else { //if answer is incorrect
        alert("incorrect");
        gold = gold - 10; //takes away some gold
        if (points == 300) {
            alert(" HINT: " + level3Hints[x]); //shows the appropriate hint for a level three question
            correctLevel3 = false; //ensures that the next time a 300 button is clicked in this puzzle, it will ask the same question
        }
        else if (points== 400){
            correctLevel4 = false; //ensures that the next time a 300 button is clicked in this puzzle, it will ask the same question
            gold = gold + 5; //overall, only 5 gold will be subtracted because level 4 is hard
        }
    }
    //displays updated gold and point values
    document.getElementById("gold").innerHTML = "Gold: " + gold;
    document.getElementById("points").innerHTML = "Points: " + totalPts;
}

//this function is evaluates a user's guess for a puzzle and proceeds accordingly
function guessPuzzle(){
    var guess = prompt("What do you think the answer is? NO spaces, ALL lowercase"); //sets guess equal to user's guess
    if (guess == puzzle) {
        //if correct...
        var currPuz = picts[puzzNum]; //sets variable equal to current puzzle
        var a = (picts2.indexOf(currPuz)).toString(); // finds the index value of this puzzle (uses picts2 because in picts, some puzzle values could be spliced out, and the index would be skewed
        document.getElementById(a).style.visibility = "visible"; //all 10 puzzle badges are the same index numbers as their counterparts in picts2, so this will display the puzzle that was correctly answered
        totalPts = totalPts + 200; //adds 200 points
        gold = gold + 50; // adds 50 gold
        alert("correct");

        if(totalGuesses==0) { //evaluates if correct answer was given on first try
            firstTry++; // adds one to firstTry, this score is shown at the end
            totalPts = totalPts + 100; //increases point value
            gold = gold + 25; //increases gold
        }
        if(picts.length == 0) //evaluates if there are no puzzles left
        {
            alert("Yay! You finished all the puzzles.");
            document.getElementById("score").innerHTML = "Here are how many you got on first try: "+ firstTry + "/10"; //displays first try

        }
        else{
            start(); //if puzzles still left, calls start()
        }
    }
    else {
        //if incorrect...
        alert("incorrect");
        totalGuesses++; //adds one to totalGuesses
        if(totalGuesses >= 3){ //evaluates if 3 or more guesses have already been made
            gold = gold - 20; //takes away gold
            alert("too many incorrect guesses! Every wrong guess for this puzzle will cost 20 gold...");
        }
    }
    document.getElementById("gold").innerHTML="Gold: "+ gold; //displays updated gold value
    document.getElementById("points").innerHTML="Points: "+ totalPts; //displays updated points value
}


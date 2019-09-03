/* Psuedo Code -- 
App/Page Loads 
    -A Random number is Generated for the computer (19 - 120)
        - That number is assigned to a Variable
        - That number is show on the page
    -Addtionally Four(4) Random Numbers are Generated (0 - 12) for the user 
        - Each generated number is assigned to separate variables (4)
        - Each variable is then assigned to a Crystal Image on the page. 
Game Logic
    - When a crystal image is clicked
        - The assigned value of that crystal is added to a Total Variable. 
        - The Total Variable is also shown on the page.
            - It will change as more crystals are clickd. 
    
    IF the Total Variable === Computer Number:
        - It is considered a win. 
        - The Wins displayed on the page will Increase by 1
        - The game resets
            - A New Random number is generated for the Computer
            - 4 New Random numbers are asssigned to the Crystals
            - The Total Variable is set back to 0
    IF the Total Variable !=== Computer Number AND (&&) Total Variable < Computer Number:
        - The Total Variable keeps adding the Crystal Value from the User Click
    
    IF Total Variable > Computer Number:
        - It is Considered a Loss
        - The Losses displayed on the page will Increase by 1
        - The game Resets
            - A New Random number is generated for the Computer
            - 4 New Random numbers are asssigned to the Crystals
            - The Total Variable is set back to 0 
*/


//--------------------------- WAITS UNTIL PAGE LOADS TO START --------------- 
$(document).ready(function() {

  
// --------------------- START GLOBAL VARIABLES & FUNCTIONS -----------------
        
// List of Global Variables

        var targetScore;
        var playerScore = 0;
        var crystalOne = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        var crystalTwo = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        var crystalThree = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        var crystalFour = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        var wins = 0;
        var loss = 0;
        

// Function that randomly assign number to computerScore Variable (19-120). 
        function genCompScore (){
            targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

            //Takes computerScore and shows on DOM
            $("#targetScore").text(targetScore);
        }



// Function that randomly assign number to each crystal (0-12). 
    function assignAllCrystals (){

        // Function that Randomly Assigns number to Crystal 1
            crystalOne = Math.floor(Math.random() * crystalOne.length);

        // Function that Randomly Assigns number to Crystal 2
            crystalTwo = Math.floor(Math.random() * crystalTwo.length);

        // Function that Randomly Assigns number to Crystal 3
            crystalThree = Math.floor(Math.random() * crystalThree.length);

        // Function that Randomly Assigns number to Crystal 4
            crystalFour = Math.floor(Math.random() * crystalFour.length);
    }

// Function that resets the game without having to refresh
    function gameReset(){
        playerScore = 0;
        crystalOne = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        crystalTwo = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        crystalThree = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        crystalFour = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        $("#userScore").text(0);
        genCompScore();
        assignAllCrystals();
        console.log(crystalOne + " " + crystalTwo + " "  + crystalThree + " " + crystalFour); // <- Left in to check/test
    }

// Game Logic Function 
    function gameLogic (){
        if (playerScore === targetScore){
            wins++;
            $("#userWins").text(wins);
            gameReset();
            $("#resultMessage").append("<div id='winMessage' style='clear:both;background:white;text-align:center;padding: 10px 20px;border-radius:10px;margin: 10px 0;color:green;'>Winner! New Target Score</span>");
                setTimeout (function () {
                    $("#winMessage").remove();
                }, 4000);
             }
             
             if (playerScore > targetScore){
             loss++;
             $("#userLosses").text(loss);
             gameReset();
             $("#resultMessage").append("<div id='lossMessage' style='clear:both;background:white;text-align:center;padding: 10px 20px;border-radius:10px;margin: 10px 0;color:red;'>Loser! Try Again</span>");
                setTimeout (function () {
                    $("#lossMessage").remove();
                }, 4000);
            };
    }
// ------------------------- END Global Variables & Functions ----------------------------------------    

// ON PAGE LOAD THESE TWO FUNCTION CALLS START THE GAME
        genCompScore();
        assignAllCrystals();
        console.log(crystalOne + " " + crystalTwo + " "  + crystalThree + " " + crystalFour); // <- Left in to check/test
        console.log(targetScore); // <- Left in to check/test

// -------------------------------------------------------------------------------------------------

// -------------------------------- START ON CLICK ACTIONS ---------------------------------------- 

//jQuery to trigger User Score & Game Logic. Will add the value of Crystal. 

            // Adds Value of Crystal 1 on Click
            $("#img-crystal-one").on("click", function(){
                playerScore += crystalOne;
                $("#userScore").text(playerScore);
                gameLogic();
            })
            // Adds Value of Crystal 2 on Click
            $("#img-crystal-two").on("click", function(){
                playerScore += crystalTwo;
                $("#userScore").text(playerScore);
                gameLogic();
            })

            // Adds Value of Crystal 3 on Click
            $("#img-crystal-three").on("click", function(){
                playerScore += crystalThree;
                $("#userScore").text(playerScore);
                gameLogic();
            })

            // Adds Value of Crystal 4 on Click
            $("#img-crystal-four").on("click", function(){
                playerScore += crystalFour;
                $("#userScore").text(playerScore);
                gameLogic();
            })

// ---------------------------------- END ON CLICK ACTIONS -----------------------------------------

}); // <------------ ENDS ALL JAVASCRIPT ----------------------
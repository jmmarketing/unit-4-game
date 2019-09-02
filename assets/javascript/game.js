/* Psuedo Code -- */

//App/Page Loads 
$(document).ready(function() {
 
  
    
        
        // List of Global Variables

        var computerScore;
        var targetScore;
        var crystalOne = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        var crystalTwo = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        var crystalThree = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        var crystalFour = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        

    //  Function that randomly assign number to computerScore Variable (19-120). 
        function genCompScore (){
            computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

            //Takes computerScore and shows on DOM
            $("#targetScore").text(computerScore);
        }


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
        
        genCompScore();
        assignAllCrystals();
        console.log(crystalOne + " " + crystalTwo + " "  + crystalThree + " " + crystalFour);
        console.log(computerScore);

//     -Addtionally Four(4) Random Numbers are Generated (0 - 12) for the user 
//         - Each generated number is assigned to separate variables (4)
//         - Each variable is then assigned to a Crystal Image on the page. 

// Game Logic
//     - When a crystal image is clicked
//         - The assigned value of that crystal is added to a Total Variable. 
//         - The Total Variable is also shown on the page.
//             - It will change as more crystals are clickd. 
    
//     IF the Total Variable === Computer Number:
//         - It is considered a win. 
//         - The Wins displayed on the page will Increase by 1
//         - The game resets
//             - A New Random number is generated for the Computer
//             - 4 New Random numbers are asssigned to the Crystals
//             - The Total Variable is set back to 0

//     IF the Total Variable !=== Computer Number AND (&&) Total Variable < Computer Number:
//         - The Total Variable keeps adding the Crystal Value from the User Click
    
//     IF Total Variable > Computer Number:
//         - It is Considered a Loss
//         - The Losses displayed on the page will Increase by 1
//         - The game Resets
//             - A New Random number is generated for the Computer
//             - 4 New Random numbers are asssigned to the Crystals
//             - The Total Variable is set back to 0

});
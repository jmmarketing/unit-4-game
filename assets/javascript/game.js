/* Psuedo Code -- */

//App/Page Loads 
$(document).ready(function() {

//     -A Random number is Generated for the computer (19 - 120)
var computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(computerScore);

var playerScore = 0;

//         - That number is assigned to a Variable
//         - That number is show on the page

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
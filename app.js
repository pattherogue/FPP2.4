const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;


// Use a series of `if`, `else if`, and `else` statements to decipher the first clue.

/* 

- If `emblemClue1` is "Eagle", the location starts with "Forum".
- If `emblemClue1` is "Lion", the location starts with "Colosseum".
- Otherwise, the location starts with "Villa".

*/

let locationStart = "";

if (emblemClue1 === "Eagle") {
    locationStart = "Forum";
} else if (emblemClue1 === "Lion") {
  locationStart = "Colosseum";  
} else {
    locationStart = "Villa";
}

/* Use boolean logic to decipher the second clue.

- If `emblemClue2` is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
- If `emblemClue2` is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.

*/

if (emblemClue2 === "Laurel" && locationStart === "Forum") {
    locationStart += " of Augustus"
} else if ( emblemClue2 === "Grapes" || locationStart === "Villa") {
    locationStart += " of Pompey"
}

/* - Depending on the value of `emblemClue3`, append a direction to the location.
    - 7 is "North"
    - 3 is "South"
    - 9 is "East"
    - 4 is "West"
*/

switch (emblemClue3) {
    case 7:
       locationStart += " North";
       break;
    case 3:
        locationStart += " South";
        break;
    case 9: 
        locationStart += " East";
        break;
    case 4:
        locationStart += " West";
        break;
}
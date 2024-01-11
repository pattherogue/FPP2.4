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
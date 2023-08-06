let numberOfStudents = 17;

if (numberOfStudents > 20) {
    console.log("classroom too small")
} else {
    console.log("classroom size acceptable")
}



let numberOfHouses = 5;

if (numberOfHouses > 2) {
  console.log("you need to sell more houses")
} else {
  console.log("seems reasonable")
}



let bill = 20;

if (bill > 15) {
  console.log("we should split the bill")
} else {
  console.log("I'll get the bill this time")
}


let grade = 91;

if (grade <= 55) {
  console.log("Not too good")
} else if (grade <= 60 && grade > 55) {
  console.log("ehhhh")
} else if (grade <= 70 && grade > 60) {
  console.log("Kepp trying!")
} else if (grade <= 80 && grade > 70) {
  console.log("Nice!")
} else if (grade <= 90 && grade > 80) {
  console.log("Doing good!")
} else {
  console.log("Great!")
}


let name = "Joe";
let message;

if (name === "Randy") {
  message = "Hi, I'm Randy"
  console.log(message)
} else if
  (name != "Randy") {
  message = ("Hi, I'm not Randy but " + name)
  console.log(message)
}
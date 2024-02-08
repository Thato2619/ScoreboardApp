
let homeScore = document.getElementById("home-btn")
let guestScore = document.getElementById("guest-btn")

//initialize count to 0
let countHome = 0
let countGuest = 0
// listen for clicks on various buutons 

//create functionality for only home players
let addOneHome = () => {
    countHome = countHome + 1
    homeScore.textContent = countHome

}

let addTwoHome = () => {
    countHome = countHome + 2
    homeScore.textContent = countHome
}

let addThreeHome = () => {
    countHome = countHome + 3
    homeScore.textContent = countHome
}


//create functions specifcially for all guest players
let addOneGuest = () => {
    countGuest = countGuest + 1 
    guestScore.textContent = countGuest
}

let addTwoGuest = () => {
    countGuest = countGuest + 2
    guestScore.textContent = countGuest
}

let addThreeGuest = () => {
    countGuest = countGuest + 3
    guestScore.textContent = countGuest
}




// increment the count varibales when the muiltple buttons are pressed
// change count based on the button clicked
//change "home-btn" & "guest-btn" in the html to reflect new scores based on both guest and home


let homeScore = document.getElementById("home-btn")
let guestScore = document.getElementById("guest-btn")

//initialize count to 0
let count = 0
// listen for clicks on various buutons 
let addOneHome = () => {

    count = count + 1
    homeScore.textContent = count

}


let addOneGuest = () => {

    count = count + 1 
    guestScore.textContent = count
}
// increment the count varibales when the muiltple buttons are pressed
// change count based on the button clicked
//change "home-btn" & "guest-btn" in the html to reflect new scores based on both guest and home

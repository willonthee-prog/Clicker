let cookieButton = document.getElementById("cookieButton")
let cookieDisplay = document.getElementById("cookieDisplay")

let upgradeClicker = document.getElementById("upgradeClicker")
let autoClicker = document.getElementById("autoClicker")


let cookies=0

let multiplier=1
let multiplierCost=25

let autoClickers=0
let autoClickerCost = 15


function displayCookieAmount() {
    cookieDisplay.innerText = "You have "+Math.round (cookies*100)/100+" cookies"
}

cookieButton.addEventListener('click',function(){
    cookies+=multiplier
    displayCookieAmount()

})


upgradeClicker.addEventListener('click',function(){
    if (cookies>=multiplierCost){
        cookies-=multiplierCost
        multiplierCost*=1.3
        multiplier++
        displayCookieAmount()
        upgradeClicker.innerText = "Upgrade clicker for "+Math.round (multiplierCost*100)/100+" cookies"
    }
    else{
        alert("not enough cookies")
    }

})


    autoClicker.addEventListener('click',function(){
    if (cookies>=autoClickerCost){
        cookies-=autoClickerCost
        autoClickerCost*=1.25
        autoClickers++
        displayCookieAmount()
        autoClicker.innerText = "Buy auto clicker for "+Math.round (autoClickerCost*100)/100+" cookies"
    }
    else{
        alert("not enough cookies")
    }

})


setInterval(function(){
    cookies+=autoClickers*0.1
    displayCookieAmount()
},1000/6)
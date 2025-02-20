console.log("guessing game")

const lbMessage = document.querySelector(".message")
console.log(lbMessage)
console.log(lbMessage.textContent)

const lbNumber = document.querySelector(".number");
console.log(lbNumber)

const lbScore = document.querySelector(".score")
console.log(lbScore)

const lbguess = document.querySelector(".guess")
console.log(lbguess)

const again = document.querySelector(".again")
console.log(again)

let randNum = 0;
let startScore = 20;

function generateNumb(){
    randNum = Math.trunc(Math.random() * 20) + 1
    console.log("random number: " + randNum)
}

again.addEventListener('click', generateNumb)

document.querySelector(".check").addEventListener('click',function (){
    let guess = Number(document.querySelector(".guess").value)
    if(guess > randNum){
        startScore--
        lbScore.textContent = startScore;
        lbMessage.textContent = "too high"
    }else if (guess === randNum){
        lbMessage.textContent = "perfekt"
    } else if (guess < randNum){
        startScore--
        lbScore.textContent = startScore
        lbMessage.textContent = "too low"
    } else{
        lbMessage.textContent = "not that number..."
    }

})


generateNumb()
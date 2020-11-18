const strtBtn = document.querySelector(".start");
const counter = document.querySelector(".counter");
const leftGun = document.querySelector(".left-gun");
const rightGun = document.querySelector(".right-gun");
const tW = document.querySelector(".tw");
const boom1 = document.querySelector('.boom1');
const boom2 = document.querySelector('.boom2');
let winner = document.querySelector(".winner");
let start = false;

let i = 3;
let counterValue;
let counterValue2;

let tWPosition = 0, rAF, delay, delay2;

counter.textContent = `0${i}`;
animationDelay();
// startCounter();

// shoot();

// window.addEventListener("keydown", function(e) {
//     if(e.key === "x") {
//         clearInterval(counterValue);
//         clearInterval(counterValue2);
//     }
// })

strtBtn.addEventListener("click", startGame);

function startGame() {
    startCounter(); //Starts the counter and shows a "shoot!" message
    shoot(); //sets the shooting mechanisms and resets the game for a new start
}

function startCounter() {
    if(i === 3) {
        winner.style.visibility = "hidden";
        counterValue = setTimeout(function countDown(){
            i--;
            counter.textContent = `0${i}`;
            console.log(i);
            counterValue2 = setTimeout(countDown, 1000)
        }, 1000);
    
        setTimeout(function() {
            clearTimeout(counterValue);
            clearTimeout(counterValue2);
            counter.textContent = `Shoot!`;
            start = true;
        }, 3000)
    }


}

function shoot() {

        window.addEventListener("keydown", function boom(e) {
            if (start === true) {
                e.preventDefault();
        
                if(e.key === "a" || e.key === "A") {
                    leftGun.style.transform = "rotate(-20deg)";
                    boom1.style.visibility = "visible";
                    setTimeout(function(){
                        boom1.style.visibility = "";
                    }, 40);

                    setTimeout(function(){
                        leftGun.style.transform ="";
                    }, 500);
                    winner.style.visibility = "visible";
                    winner.style.left = "5%";
                    window.removeEventListener("keydown", boom);
                    resetGame();
                }
        
                else if(e.key === "l" || e.key === "L") {
                    rightGun.style.transform = "rotate(20deg)";
                    boom2.style.visibility = "visible";
                    setTimeout(function(){
                        boom2.style.visibility = "";
                    }, 40);
                    setTimeout(function(){
                        rightGun.style.transform ="";
                    }, 500);
                    winner.style.visibility = "visible";
                    winner.style.right = "5%";
                    window.removeEventListener("keydown", boom);
                    resetGame();
                }
            }        
         });
    
}

function resetGame() {
    i = 3;
    start = false;
    counter.textContent = `0${i}`;
}

//tumblewood requestanimationframe function
let k = 2;
let rDegree = 0;
function tWAnimation() {
    tW.style.left = `${tWPosition}%`;

    k*=-1;
    l = random(-3, 10);

    rDegree += l * 1.25;

    if(rDegree >= 360) {
        rDegree = 0;
    }

    tW.style.top = `${70+k}%`;
    tW.style.transform = `rotate(${rDegree}deg`;

    console.log(tWPosition);

    if(tWPosition >= 100) {
        tWPosition = -10;
    }

    tWPosition += l;
}

function animationDelay(){
    delay = setTimeout(function setDelay(){
        tWAnimation();
        delay2 = setTimeout(animationDelay, 100)
    }, 100);
}

function random(min,max) {
    var num = Math.floor(Math.random()*(max-min)) + min;
    return num;
}
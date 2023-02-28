const timer = document.querySelector(".display_timer")
let y = document.querySelectorAll("p");
let hour = 0;
let minute = 0;
let second = 0;
let milliSecond = "000";
let index = 0;
let x
let content
let cast;
let cast1;
// let hour = "00";
// let minute = "00";
// let second = "00";
// let milliSecond = "00";
let intr;
timer.innerHTML = `${hour} : ${minute} : ${second} : ${milliSecond}`
function stopWatch(){
    // milliSecond += 1;
    milliSecond = parseInt(milliSecond)+1;
    if(milliSecond === 1000){
        second= parseInt(second)+ 1;
        // milliSecond="000";
        milliSecond=0;
    }
    if(parseInt(second) === 60){
        minute+=1;
        // second="00";
    }
    if(minute === 60){
        hour+=1;
        minute=0;
        // second="00";
    }
    // timer.innerHTML = `00 : 00 : 00 : 00`
    // if(milliSecond < 10){milliSecond="00"+milliSecond}
    // else if(milliSecond < 100){milliSecond="0"+milliSecond}
    // if(parseInt(second) < 10){second="0"+second}
    timer.innerHTML = `${hour} : ${minute} : ${second} : ${milliSecond}`
    // debugger
}


function startHandling(){
    // let hour = 00;
    // let minute = 00;
    // let second = 00;
    // let milliSecond = 00;
    // const time =() =>{}
    // time();
    // setInterval()
    
    intr = setInterval(()=>{stopWatch()}, 1);
}
function PauseHandling(){
    clearInterval(intr);
}
function resetHandling(){
    clearInterval();
    hour = 00;
    minute = 00;
    second = 00;
    milliSecond = 00;
    timer.innerHTML = `${hour} : ${minute} : ${second} : ${milliSecond}`
    // y.innerHTML = "";
    document.querySelector(".addx").innerHTML = "";
    // x.querySelectorAll(".addx").innerHTML = ""
    // cast.innerHTML = "";
}


function castHandling(){
    index+=1;
     cast = document.createElement("p");
     content = document.querySelector(".content");
     x = cast.classList.add("addx");
    content.appendChild(cast)
    cast.innerHTML = `Cast ${index} : ${hour} : ${minute} : ${second} : ${milliSecond}`;
    
}


const state=document.getElementById("state");
const cpu=document.getElementById("cpu");
const gu=document.getElementById("gu");
const cho=document.getElementById("cho");
const pa=document.getElementById("pa");
const player=document.getElementById("player");
const reset=document.getElementById("reset");
const win=document.getElementById("win");
const lose=document.getElementById("lose");


const jans=["グー","チョキ","パー"]

let playjan;
let cpuja;
let winCount=0;
let loseCount=0;

start();

gu.addEventListener("click",()=>{
  player.textContent=jans[0];
  playjan=jans[0]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja; 
  result();
})

cho.addEventListener("click",()=>{
  player.textContent=jans[1];
  playjan=jans[1]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja;
  result();
})

pa.addEventListener("click",()=>{
  player.textContent=jans[2];
  playjan=jans[2]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja;
  result();
})



reset.addEventListener("click",()=>{
  start();
  state.textContent="最初はグー！じゃんけん・・・";
})

function result(){
  if(playjan===cpuja){
    state.textContent="あいこで・・・"
  }else if(playjan===jans[0]&&cpuja===jans[1]||playjan===jans[1]&&cpuja===jans[2]||playjan===jans[2]&&cpuja===jans[0]){
    state.textContent="かち";
    display()
    winCount++;
    win.textContent=winCount;
  }else{
    state.textContent="まけ";
    display()
    loseCount++;
    lose.textContent=loseCount;
  }
}

function start(){
  gu.disabled=false;
  cho.disabled=false;
  pa.disabled=false;
  reset.disabled=true;
}

function display(){
  gu.disabled=true;
  cho.disabled=true;
  pa.disabled=true;
  reset.disabled=false;
}


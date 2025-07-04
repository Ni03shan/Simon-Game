let userseq=[]
let gameseq=[]

let level=1
let random= [1,2,3,4]

let first=document.getElementById('first')
let second=document.getElementById('second')
let third=document.getElementById('third')
let fourth=document.getElementById('fourth')

let started=false

let boxx =document.querySelector(".box")

let changed=document.getElementById('change')
document.addEventListener("keypress",function(){
    changed.innerText="level: "+level  
    started=true
    nextLevel()
},{once:true})

function Game(rannum){
    console.log(gameseq)
    if(started===true){
            if(1===rannum){
                first.style.backgroundColor="white"
                setTimeout(function(){
                    first.style.backgroundColor=""
                },200)
            }
            else if(2===rannum){
                second.style.backgroundColor="white";  
                setTimeout(function(){
                    second.style.backgroundColor="";  
                },200)
            }
            else if (3===rannum){
                third.style.backgroundColor="white"
                setTimeout(function(){
                    third.style.backgroundColor=""
                },200)
            }
            else{
                fourth.style.backgroundColor="white"
                setTimeout(function(){
                    fourth.style.backgroundColor=""
                },200)
            }
        }
}

function gameBegin() {
    boxx.addEventListener("click", function(event) {
        if (first.contains(event.target)) {
            userseq.push(1);
            console.log(userseq)
        }
        else if(second.contains(event.target)){
            userseq.push(2)
            console.log(userseq) 
            
        }
        else if(third.contains(event.target)){
            userseq.push(3)
        }
        else if(fourth.contains(event.target)){
            userseq.push(4)
        }
        
        let currntlvl = userseq.length-1
        
        if (gameseq[currntlvl]!=userseq[currntlvl]){
            changed.innerText=" GameOver , press any key to restart"  
            resetGame()
            return ;
        }
        if(userseq.length==gameseq.length){
            setTimeout(()=>nextLevel(),1000)
        }
    });
}
gameBegin()

function nextLevel(){ 
    level++
    changed.innerText="Level :"+level
    const rannum = Math.floor(Math.random() * 4) + 1;
    gameseq.push(rannum);
    userseq=[]
    playSequence();
}

function playSequence(){
    let i=0
    
    let interval=setInterval(()=>{
        Game(gameseq[i])
        i++
        if(i>=gameseq.length){
            clearInterval(interval)
        }
    },600)
}

function resetGame(){
    userseq=[]
    gameseq=[]
    level=0
    
    started=false;
    
    document.addEventListener("keypress", function () {
        if (!started) {
            started = true;
            nextLevel();
        }
    }, { once: true });
}
let user=0;
let comp=0;
let msgg=document.querySelector(".msg");

 const userscore=document.querySelector(".userscore");
 const compscore=document.querySelector(".comscore");

const compgene=()=>{
    let opt=["rock","paper","scissors"];
   const random=Math.floor( Math.random()*3);
   return opt[random];
};
const showwin=(userwin ,userchoice,computerchoice)=>{
    if(userwin==true){
        console.log('u r win');
        user++;
        userscore.innerText=user;
        msgg.innerText= `you win! you= ${userchoice} & com= ${computerchoice}`;
        msgg.style.backgroundColor="green";

        
    }
    else{
        console.log('you r lose');
        comp++;
        compscore.innerText=comp;
        msgg.innerText=`you lose! you= ${userchoice} & com= ${computerchoice}`;
        msgg.style.backgroundColor="red";
        
    }
};
const drawgame=()=>{
    console.log('game was draw');
    msgg.innerText=`draw game! you= ${userchoice} & com= ${computerchoice}`;
    msgg.style.backgroundColor="grey";
}
// const wingame=()=>{
//     console.log('you are win');
    
// }
const playgame=(userchoice)=>{
    console.log("user choice-",userchoice);
    //computer choice
    const computerchoice=compgene()
    console.log('computer choice',computerchoice);
    if(userchoice===computerchoice){
      
        drawgame();
    }
    else{
        let userwin =true;
        if(userchoice==="rock"){
            //comchoice=scissor/paper
            userwin=computerchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //comchoice=scissor/rock
            userwin=computerchoice==="scissors"?false:true;
        }
        else{
            userwin=computerchoice==="rock"?false:true;

        }
        showwin(userwin,userchoice,computerchoice);
        
    }
};

let choi=document.querySelectorAll(".choice");
choi.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id")
    playgame(userchoice );
    })
   
    });
   


// let us = 0;
// let cs = 0;

const choice=document.querySelectorAll(".ch");
const msg = document.querySelector("#re");
const y = document.querySelector("#you");
const c = document.querySelector("#com");
const d = document.querySelector("#daw");

choice.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        const userchoice=ch.getAttribute("id");
        game(userchoice);
    })
})

//Computer Generate Choice
const generate=()=>{
    const compch =["Rock","Paper","Scissor"];
    let compid = Math.floor(Math.random()*3);

    return compch[compid];
}

//User Generate Choice
const game=(userchoice)=>{

    const compchoice = generate();

    if(userchoice === compchoice)
    {
        draw();
    }
    else{
        let userwin = true;
        if(userchoice==="Rock")
        {
            userwin = compchoice==="Paper" ? false : true;
        }
        else if(userchoice==="Paper")
        {
            userwin = compchoice==="Scissor" ? false : true;
        }
        else{
            userwin = compchoice==="Rock" ? false : true;
        }
        showresult(userwin,userchoice,compchoice);
    }
    
};

let user = 1; 
let computer = 1;
let draws = 1;

const showresult=(userwin,userchoice,compchoice)=>{
    if(userwin===true)
    {
        msg.innerText=`You Win ( ${userchoice} beats ${compchoice})`;
        let yo = user++;
        y.innerText=yo;
        msg.style.color="green";
    }
    else{
        msg.innerText=`Computer Win ( ${compchoice} beats ${userchoice})`;
        let co = computer++;
        c.innerText=co;
        msg.style.color="red";
    }
}

const draw=()=>{
    msg.innerText="Game Draw";
    let dw = draws++;
    d.innerText=dw;
    msg.style.color="yellow";
}

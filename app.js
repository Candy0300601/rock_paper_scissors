let userscore=0;
let compscore=0;
let uscore=document.querySelector("#userscore");
let cscore=document.querySelector("#compscore");
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let resetbtn=document.querySelector("#resetbtn");

resetbtn.addEventListener("click",()=>
{
      userscore=0;
      compscore=0;
      uscore.innerText=userscore;
      cscore.innerText=compscore;
      msg.innerText="Play Your Turn ";
      msg.style.backgroundColor="#1a1b25";
});

const gencompchoice=()=>
{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
      return options[index];
};

const drawgame =(userchoice)=>
{
    //  console.log("Game was Draw! ");
     msg.innerText="Game was Draw! both played "+userchoice;
     msg.style.backgroundColor="#1a1b25";
}

const showwinner=(userwin,userchoice,compchoice)=>
{
     if(userwin==true)
     {
      //   console.log("You Win!");
      msg.innerText="You Win! Your "+userchoice+" beats "+compchoice;
      msg.style.backgroundColor="green";
     }
     else{
        //  console.log("You Lose!");
         msg.innerText="You Lose! "+compchoice+" beats Your "+userchoice;
         msg.style.backgroundColor="red";
     }
}

const playgame=(userchoice)=>
{
      console.log("user choice = ",userchoice);
      const compchoice = gencompchoice();
      console.log("computer choice = ",compchoice);
      let userwin=true;
      let draw=false;
      if(userchoice==compchoice)
      {
          draw=true;
          drawgame(userchoice);
      }
      else if(userchoice==="rock")
      {
        //paper scissors
        if(compchoice=="paper")
        {
             userwin=false;
        }
      }
      else if(userchoice==="paper")
      {
        //rock scissors
         if(compchoice==="scissors")
         {
             userwin=false;
         }
      }
      else if(userchoice==="scissors")
      {
        //paper rock
         if(compchoice=="rock")
         {
             userwin=false;
         }
      }

      if(draw===true)
      {
        //  ++userscore;
        //  ++compscore;
        //  uscore.innerText=userscore;
        //  cscore.innerText=compscore;
         
      }
      else if(userwin===true)
      {
         ++userscore;
         uscore.innerText=userscore;
         
      }
      else{
         ++compscore;
         cscore.innerText=compscore;
      }
     if(draw===false)
      showwinner(userwin,userchoice,compchoice);
        


};

choices.forEach((choice) =>
{
   choice.addEventListener("click",() =>
  {
    const userchoice=choice.getAttribute("id");
    //  console.log(userchoice ,' was clicked !');
     playgame(userchoice);
   });
});

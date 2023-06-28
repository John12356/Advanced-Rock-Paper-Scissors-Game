const rulesBtn=document.querySelector('.rules-btn');
const closeBtn=document.querySelector('.rules-close');
const rules=document.querySelector('.rules-page');

const playAgainBtn=document.querySelector('.play-again');

const select=document.querySelectorAll('.choice-btn');
const gameBoard=document.querySelector('.board');
const finalDiv=document.querySelector('.final');
const result=document.querySelectorAll('.results');
const Selection=[
    {
        name:"rock",
        lose:"scissors"
    },
    {
        name:"paper",
        lose:"rock"
    },
    {
        name:"scissors",
        lose:"paper"
    }
];

const finalWinner=document.querySelector('.win-status');
const Winner=document.querySelector('.status');
const showScore=document.querySelector('.score-num');
let score=0;

 select.forEach( (button) => {
    button.addEventListener('click',()=>{
        // console.log("5");
        const selName=button.dataset.choice;
        const choice=Selection.find( (choice) => choice.name === selName);
        choose(choice);
    })
 });

 function choose(choice){
    // console.log("55");
    let aiChoose=aiChoice();
    // const ai=aiChoose;
    while(choice==aiChoose){
        aiChoose=aiChoice();
    }
    display([choice,aiChoose]);
    displayWinner([choice,aiChoose]);
 };

 function aiChoice(){
    // console.log("555");
    const random=Math.floor(Math.random() * Selection.length);
    return Selection[random];
 };

 function display(results){
    result.forEach((finalDiv,index)=>{
        // console.log("5555");
        setTimeout(()=>{
           finalDiv.innerHTML=`
           <div class="choice ${results[index].name}">
          <img src="images/icon-${results[index].name}.svg" alt="">
        </div>
           `; 
        },index * 1000);
    });
    gameBoard.classList.toggle('hidden');
    finalDiv.classList.toggle('hidden');

 };
 function displayWinner(results){
    setTimeout(()=>{
        const pwin=isWin(results);
        const awin=isWin(results.reverse());
        if(pwin){
            Winner.innerText="you win";
            result[0].classList.toggle('winner');
            scoring(1);
        }
        else{
            Winner.innerText="you lose";
            result[1].classList.toggle('winner');
        }
        finalWinner.classList.toggle('hidden');
        finalDiv.classList.toggle('show-winner');
    },1000);
    
    
 };

 function isWin(results){
    return results[0].lose === results[1].name;
 }

 playAgainBtn.addEventListener('click',()=>{
    gameBoard.classList.toggle('hidden');
    finalDiv.classList.toggle('hidden');

    result.forEach((resultDiv) =>{
        resultDiv.innerHTML="";
        resultDiv.classList.remove('winner');
    })

    Winner.innerText="";
    finalWinner.classList.toggle('hidden');
    finalDiv.classList.toggle('show-winner');
 });

 function scoring(point){
    score+=point;
    showScore.innerText=score;
 };

rulesBtn.addEventListener('click',()=>{
    rules.classList.toggle('show-rules-page')
});


closeBtn.addEventListener('click',()=>{
    rules.classList.toggle('show-rules-page')
});


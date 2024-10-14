let box=document.querySelectorAll(".box");
let h3=document.querySelector("h3");
let btn=document.querySelector("button");
console.log(box);
let turn= true;
let count=0;
let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
 
box.forEach(element => {
    element.addEventListener("click",()=>{
        if (turn == true){
            if(element.innerText!="O"){
                element.innerText="X";
                turn= false; 
                count++;
            }     
        }
        else{    
            if(element.innerText!="X"){
                element.innerText="O";
                element.style.color="red"; 
                turn= true;
                count++;
            }        
        }
        checkWinner();
        if(count==9){
            draw();
        }
    })
});
function draw(){
        h3.innerText= "It's Draw";
}

const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1Val=box[pattern[0]].innerText;
        let pos2Val=box[pattern[1]].innerText;
        let pos3Val=box[pattern[2]].innerText;
        console.log(pos1Val);
 
        if(pos1Val!='' && pos2Val!='' && pos3Val!=''){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner");
                console.log("winner" + pos1Val);
                h3.innerText= pos1Val+" is Winner."
                resetGame();
            }
        }
    }
}

function resetGame(){
    box.forEach(element => {
        element.innerText="";
        turn= true;
    });
}

btn.addEventListener('click',()=>{
    resetGame();
    h3.innerText= " ";
})
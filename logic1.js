let boxes = document.querySelectorAll(".box");
let Reset =document.querySelector("#Reset")
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO

const winpatters =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText = "O";
            box.style.color="green";
            turnO = false;
        }else if(turnX){
            box.innerText ="X";
            turnX = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const 
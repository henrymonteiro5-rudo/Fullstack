document.getElementById("d1").innerHTML = "Henry Monteiro";
let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");
let ano = 2026;

let nasc = ano-idade;

document.getElementById("resp_ex1").innerHTML = "Ola" + nome + ", seu ano de nascimento é" + nasc + "!"

function mensagem_2(texto){
    alert(texto);
}

mensagem();
mensagem_2("Henry");

function soma (a,b){ return a + b;}
function subt (a,b){ return a - b;}
function mult (a,b){ return a * b;}
function divs (a,b){ return a / b;}

resp = soma (6,61);
document.getElementById("soma").innerHTML = resp

function exemplo2(){
    let x = parseInt (document.getElementById("in_ex2").value);
    for(let i = 0; i < x; i++){
        console.log (x + i);
    }
    document.getElementById("resp_ex2").innerHTML = x;

}


function exemplo3(){
    let a = parseInt(document.getElementById["in_1_ex3"].value);
    let b = parseInt(document.getElementById["in_2_ex3"].value);
    
    let resp = soma (a,b);

    document.getElementById("resp_ex3").innerHTML = resp;
}

function exemplo4(){
    let a = parseInt(document.getElementById["in_1_ex4"].value);
    let b = parseInt(document.getElementById["in_2_ex4"].value);

    let resp =0;
    if(a < 0|| b < 0){
        resp = soma (a,b);
    }else{
        resp = mult(a,b);
    }

    document.getElementById("resp_ex4").innerHTML = resp;
}
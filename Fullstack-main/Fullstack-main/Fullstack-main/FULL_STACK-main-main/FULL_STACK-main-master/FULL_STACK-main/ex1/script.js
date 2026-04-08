let idades = [18];
console.log(idades)

idades.push(25)
console.log(idades)

idades.pop
console.log(idades)

console.log(idades[0])
console.log(idades[1])
console.log(idades.length)

let retangulo_1 = {
    x: 10,
    y: 10,
    w: 50,
    h: 50,
    color: "red"
};

let retangulo_2 = {
    x: 100,
    y: 100,
    w: 50,
    h: 50,
    color: "green"
};

// --------------------------------------------------------------------------------------------------
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

//borda
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(10,10,400,400);

//quadrado1
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 50, 50);
ctx.strokeRect (10, 10, 50, 50);
ctx.closePath()

//quadrado2
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(360, 360, 50, 50);
ctx.strokeRect (360, 360, 50, 50);
ctx.closePath()

//quadrado3
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(360, 10, 50, 50);
ctx.strokeRect (360, 10, 50, 50);
ctx.closePath()

//quadrado4
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(10, 360, 50, 50);
ctx.strokeRect (10, 360, 50, 50);
ctx.closePath()

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.font = "25px Arial"
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web",200,100);
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(300,150,20,1.5*Math.PI,4*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(100,150,20,1.5*Math.PI,4*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200,220,60,2*Math.PI,3*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
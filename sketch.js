var imagemTorre,torre;
var imagemPorta,porta,grupoPortas;
var imagemGrade,grade,grupoGrades;
var imagemFantasma,fantasma;
var bloconinvisivel,grupodeBlocos;
var somAssustador;
var estado = "JOGAR";
var score = 0;

function preload(){
    imagemTorre = loadImage("tower .png");
    imagemPorta = loadImage("door .png");
    imagemGrade = loadImage("climber.png");
    imagemFantasma = loadImage("ghost-standing.png");
    somAssustador = loadImage("spooky.wav");
}

function sentup() {

createCanvas(600,600);
somAssustador.play();
torre = createSprite(300,300);
torre.addImage("torre",imagemTorre);
torre.velocityY = 1;

 grupoPortas = new grupoPortas();
 grupoGrades = new grupoGrades();
 grupodeBlocos = new grupodeBlocos();


 fantasma = createSprite(200,200,50,50);
 fantasma.scale = 0.3;
 fantasma.addImage("fantasma",imagemFantasma);
}
function draw() {
 blackground(black);
 if(estado === "JOGAR"){

  score = score + Math.round(frameRate()/60);

  if (torre.y > 590){
    torre.y = 300;
  }

  if(keyDow("right")){
    fantasma.x = velocity.x = +3;

 }
  if(keyDow("left")){
    fantasma.x = velocity.x = -3;

  }
  if(keyDow("space")){
    fantasma.velocityy = -10;

  
  }
  fantasma.velocityY = fantasma.velocityY + 0.8;

  if(grupoGrades.isTouching(fantasma)){
     fantasma.velocityY = 0;
  }


 drawSprites();

 gerarPortas();
 }
  if(estado === "ENCERRAR"){
     stroke("yellow");
     fill("yellow");
     textSize(30);
     text("Game Over",230,250);
     text("score: "+score,20,30);

  }
 function gerarPortas () {
  if (frameCount % 240 === 0) {
porta = createSprite (200, -50);  
porta.addImage ("porta", imagemPorta);

grade = createSprite(200,10);
grade.addImage("grade",imagemGrade);

porta.x = Math.round(random(120,400));
porta.velocityY = 1;

porta.lifetime = 800;
grade.lifetime = 800;

fantasma.depth = porta.depth;
fantasma.depth = fantasma.depth + 1;

grupoPortas.add(porta);
grupoGrades.add(grade);
 }
}





























}
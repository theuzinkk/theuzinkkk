//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete()
  }

function mostraRaquete(){
rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)  

}

function movimentaMinhaRaquete(){
if(keyIsDown(UP_ARROW)){
  yRaquete += 10;
}
  if(keyIsDown(UP_ARROW)){
  yRaquete -= 10;
 }
}
  function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0)           {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > width || yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}
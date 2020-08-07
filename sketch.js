const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// empty arrays
var particles = [];
var plinkos = [];
var divisions =[];

function setup() {
  createCanvas(500,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height + 4, width, 40);

  for (var d = 0; d <=width; d = d + 80) {
    divisions.push(new Division(d, height - 150, 10, 300));
  }

  // loop for top plinko row
  for (var p = 40; p <= width; p = p + 50) {
    plinkos.push(new Plinko(p, 50));
  }

  // loop for 2nd plinko row
  for (p = 20; p <=width-10; p = p + 50){
    plinkos.push(new Plinko(p, 100));
  }

  // loop for 3rd plinko row
  for (p = 40; p <=width; p = p + 50){ 
    plinkos.push(new Plinko(p, 150));
  }

  // loop for 4th plinko row
  for (p = 20 ; p <=width-10; p = p + 50){
    plinkos.push(new Plinko(p, 200));
  }

  // loop for 5th plinko row
  for (p = 40 ; p <=width-10; p = p + 50){
    plinkos.push(new Plinko(p, 250));
  }

  // loop for bottom plinko row
  for (p = 20 ; p <=width-10; p = p + 50){
    plinkos.push(new Plinko(p, 300));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  //console.log(frameCount);

  ground.display();

  // to display plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  // to make them come after every 90 framecounts
  if(frameCount % 90 == 0){
    particles.push(new Particle(random(10, 490), 10));
  }
  // to display particles
  for (p = 0; p < particles.length; p++) {
    particles[p].display();
  }
  // to display divisions
  for (var d = 0; d < divisions.length; d++) {
    divisions[d].display();
  }
}
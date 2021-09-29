var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 50; j <=width-10; j=j+80) { 
    plinkos.push(new Plinko(j,100)); 
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+80) 
  {
    plinkos.push(new Plinko(j,200));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+80) 
  {
    plinkos.push(new Plinko(j,300));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+80) 
  {
    plinkos.push(new Plinko(j,400));
  }

  smallball1 = new Smallball(150,100);
  smallball2 = new Smallball(250,100);
  smallball3 = new Smallball(350,100);
  smallball4 = new Smallball(450,100);
  smallball5 = new Smallball(550,100);
  smallball6 = new Smallball(650,100);
  smallball7 = new Smallball(750,100);
  smallball8 = new Smallball(850,100);
  smallball9 = new Smallball(950,100);
  smallball10 = new Smallball(650,100);
  smallball11= new Smallball(650,100);
  smallball12 = new Smallball(650,100);
  smallball13 = new Smallball(650,100);


}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount


  //display the particles 
  smallball1.display(); 
  fill("skyblue");   
  smallball2.display();
  fill("blue");    
  smallball3.display();  
  fill("yellow");      
  smallball4.display();  
  fill("red");        
  smallball5.display();   
  fill("pink");       
  smallball6.display();   
  fill("darkblue");       
  smallball7.display();    
  fill("violet");       
  smallball8.display();    
  fill("Orange");       
  smallball9.display(); 
  fill("DodgerBlue");          
  smallball10.display();
  fill("MediumSeaGreen");           
  smallball11.display();
  fill("SlateBlue");           
  smallball12.display();
  fill("FireBrick");           
  smallball13.display();    
  fill("CadetBlue");       


}




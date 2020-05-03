
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine;
    World = Matter.World;
    Bodies = Matter.Bodies;

var engine;
var world;

var ground;
 
var boxes = [];
var gSlider;
var box1;
 
 
function setup() {
    createCanvas(1200, 1200);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var ground_option = {
        isStatic :true
    }

    ground = Bodies.rectangle(200,390,400,50,ground_option);
    World.add(world,ground);


    // Create an instance of Engine, World
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}

function draw() {
    // Draw all the elements including the slider that 

    background(0,50,055);

    for (var i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes

}
 

function mouseDragged() {
    boxes.push(new Box(mouseX ,mouseY,20,20 ));
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
    }
}

function Box(x, y, w, h, options) {
    
    this.body = Bodies.rectangle(x,y,w,h)
    this.w = w;
    this.h = h;
    World.add(world,this.body)

       

    // add options such as friction and restitution. Experiment with the values
    var options = {

    }
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
         fill("red");
     
        rect(pos.x,pos.y,this.w,this.h);
    }
}
 


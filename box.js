// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options, Bodies, World ) {
    this.body = Bodies.rectangle(x,y,w,h)
    this.w = w;
    this.h = h;
    World.add(world,this.body);
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

        Push();
        translate(pos.x,pos.y);
        rect(0,0,this.w,h);

        Pop();
    }
}
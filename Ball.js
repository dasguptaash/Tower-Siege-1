class Ball{
    constructor(x,y,width,height){
        var options = {
                       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
	}
	display()
	{
			var pos=this.body.position;	
			var angle = this.body.angle;	
			push()
			//rectMode(CENTER)
			//draw the ellipse here to display the rubber ball
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,50,50);
			pop()
    }
}
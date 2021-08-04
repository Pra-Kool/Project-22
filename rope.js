class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}
	}
	//create rope constraint here
Matter.Constraint.create(body1, body2, 100,0.7);
World.add(world,constraint);
	}


    //create display() here 

display()
{
var pointA=this.rope.bodyA.postion;
var pointB=this.rope.bodyB.positon;

strokeWeight(2)
}
}

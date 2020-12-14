class Dustbin{
    constructor(x,y,width,height){
       var options={
           isStatic:true,
           friction:0.5
       }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.body= this.body=Bodies.rectangle(x, y, width, height, options) 
    }
    display(){
        
    }
}
//card class
function Card(){
  this.x; 
  this.y;
  this.num;

  this.set = function(x, y, n){
    this.x = x;
    this.y = y;
    this.num = n;
  }
  
  this.show = function(){
    fill(180);
    stroke(255);
    rect(this.x*scl, this.y*scl, scl, scl);
    fill(0,0,200);
    text(this.num, this.x *scl,this.y*scl+scl*3/4);
  }
}
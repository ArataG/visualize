function Field(){

  this.show = function(){
    for(var y = 0; y < rows; y++){
      for(var x = 0; x < cols; x++){
        stroke(200);
        noFill();
        rect(x*scl, y*scl, scl, scl);
      }
    }
  }
}
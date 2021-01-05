function Player(){
  this.x = 0;
  this.y = 0;

  this.update = function(op){
    if(op == 'R') this.x += scl;
    if(op == 'L') this.x -= scl;
    if(op == 'U') this.y -= scl;
    if(op == 'D') this.y += scl;
    if(op == 'I') {
      for(let j = 0; j < 100; j++){
        if(card[j].x == this.x/scl && card[j].y == this.y/scl){
          deck.add(card[j].num);
          card[j].x = 500;
          card[j].y = 0;
          break;
        }
      }      
    }
    if(op == 'O'){
      let topcard = deck.draw();
      card[topcard].x = this.x/scl;
      card[topcard].y = this.y/scl;
    }
    //ERROR
  }

  this.show = function(){
    fill(255,0,0);
    rect(this.x, this.y, scl, scl);
  }
}
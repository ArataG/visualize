function Deck(){
  this.x = 420;
  this.y = 20;

  this.rw = 80;
  this.rh = 20;

  this.top = 99;
  this.stk = [];

  //deckに加える
  this.add = function(num){
    this.top = num;
    this.stk.push(num);
  }

  //deckを引く
  this.draw = function(){
    var res = this.stk.pop();
    this.top = res;
    return res;
  }

  // this.show = function(){
  //   stroke(255);
  //   noFill();
  //   text(' deck : ' + this.top, this.x, this.y);
  //   rect(this.x, this.y - this.rh*3/4, this.rw, this.rh);
  // }

  this.show2 = function(){

    for(var y = 0; y < 10; y++){
      for(var x = 0; x < 10; x++){
        //
        if(x + y * 10 > this.stk.length) break;
        fill(180);
        noStroke();
        rect(x*scl+ 400+50, y*scl+ 150, scl, scl);
        fill(0,0,200);
        text(this.stk[x + y * 10], x * scl + 400+50, y*scl+scl*3/4 + 150);
      }
    }

    for(var y = 0; y < 10; y++){
      for(var x = 0; x < 10; x++){
        stroke(0,200,200);
        noFill();
        rect(x*scl + 400+50 , y*scl + 150, scl, scl);
      }
    }
  }
}


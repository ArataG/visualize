var  infile ='15 19 8 1 3 13 2 19 17 10 14 3 3 2 19 4 6 2 18 1 4 4 3 10 0 15 2 5 10 7 6 3 19 12 1 0 19 3 4 1 0 6 10 18 12 12 8 13 6 4 10 2 6 12 2 0 0 11 6 9 8 3 13 9 9 0 11 17 9 4 12 1 1 18 19 19 9 9 2 11 8 19 18 3 2 15 8 16 16 2 4 5 14 4 9 3 15 13 3 0 8 11 15 4 0 7 12 19 18 7 12 17 8 2 6 0 1 7 17 0 16 10 1 6 10 5 4 14 12 7 6 11 6 6 14 19 15 15 17 16 1 12 7 9 2 7 4 7 1 4 5 3 0 17 17 3 5 13 9 16 12 13 11 12 15 18 0 10 19 6 12 4 10 8 15 1 10 13 17 15 1 5 15 14 19 5 17 7 2 18 5 7 12 6 3 6 19 7 1 16';

const cardPositions = infile.split(' '); //空白区切りで分割


var a ='RRRRRRIRIRRRIRIRRRRIRRIRRDLILLILLLLILLLLLILILILILLLLIDIRRRRRIRRIRRRRIRRRRIRRRIRIDLLLLLLILLLILLLLILLLLILLIDRIRRRIRIRRIRRRRRRRIRRRRRDLLLLLLILLLLLLILLLLILLLDIRRIRIRIRRIRRRIRRIRIRRRRRRRDLLLLLLLLLLILLLLLLLLLDRIRIRIRRRRRRRRIRRIRRRIRRRIDLLLILLLLLLLILLLLLILILLLIDRRIRRRIRRIRIRRRRRIRRRRRIRDLLILLLLLILLLLLLLLLLLLDRIRRRIRRIRIRRRRRIRIRRRRIRRIDLLLLLLLLLLILLLLLLLLLDRRRIRIRRRRRRRRRRRRRRRIDILILLLILILILLLLLLLLLILLLILDRRIRRRRRRRRIRRRRRRRRRDLLLILILLLLLILLLILLLLILLLIDRIRRIRRRRIRRRRRRRRRRRRDILLLLLLLILLLLLILILILILILLLOROROROROROROROROROUOLOLOLOLOLOLOLOLOLOUOROROROROROROROROROUOLOLOLOLOLOLOLOLOLOUOROROROROROROROROROUOLOLOLOLOLOLOLOLOLOUOROROROROROROROROROUOLOLOLOLOLOLOLOLOLOUOROROROROROROROROROUOLOLOLOLOLOLOLOLOLODDDDDDDRRRRIUUULIUULLILIDDDDDDRRRRRRIURIUUUUULLLIDDDDDDDLLLIUUUUUURRRIDDDDDDRRRRRIUUUUUUULLILLLLLIUURRIDIDDDDLLIUURIDDDDDDRRIUUUUUUUURIDDDDDDDDLLLLLLIUUUUUUURRRRRRIUULLLLLLIDDDDDDIRRRRRRRIUUIULLLLLIDDRRIULLLIUUURRRRIULLIDDDLLLIDRRRRRIDDDRRRIUULLLIDLLLLIURRRRRRIDLLLLIUUUUUURRRIDDDDDDDDDIUUUURRIUUUULLLLLLIDDDRRRRRRRIDDDDDLIUUUUUUUULLLLLLLIDDDRRRRRRRIDDDDLLLLLLIUUUUUURRRRRRIDDDDDLLIUUIDDLLLLLLIUUUUURRRRRIDDRIDDDDLLLLLLIUUUUUUUURIDDDDDDDRRRRRRRRIDDLLIUUURRIUULLLLLIURIUUURRRRIDDDDDDDDILLLLLLIUUUUUUURRRRRRIDDDDLLLLLLIUURRRRRRIDDDLLLIUULLLLLLIURIDDDDRRRRILLLIDRRIUUUUUUUURRRRIDDDDLLLLLLIUUURIDRRRRRRIULLIDDLIUUULIDDDDDDDDRRRIUUUUUIDDRIDLILLLLLLIDRIUUUUUUULIDDDDDDDDDRIUUURIULLLIDDDIUUULIDDDRRRRRIUUUUUUURRRIDDDDDDLLLLLLLIDDRIURRRRRIUUUUUUULLLLLLLIDDRRRRRRRIDDDLLIUUUULLIDDDDDDDRIUUUUUUUUURRRI';


var slider;
let button;


var cols, rows;
var scl = 20;



var cnt = 0;

card = [];

function setup(){
  slider = createSlider(0, TWO_PI, PI/6, 0.01);
  slider2 = createSlider(0, TWO_PI, PI/6, 0.01);
  button_output = createButton("output file");
  button_input = createButton("input file");
  createCanvas(400,400);
  var w = 400;
  var h = 400;
  cols = w/scl;
  rows = h/scl;
  field = new Field();
  s = new Snake();

  for(let i = 0; i < 100; i++){
    card[i] = new Card();
    x = cardPositions[i*2];
    y = cardPositions[i*2+1];
    --x;
    --y;

    card[i].set(x,y,i);
  }
  frameRate(30);
  background(51);
}


function draw(){
  
  if(cnt < 1000){
    background(51);
    for(let i = 0; i < 100; i++){
      card[i].show();
    }
    //card[0].show();
    field.show();
    s.update(a[cnt]);
    s.show();

  }
  cnt++;
}
//

function Field(){

  this.set = function(){

  }

  this.update = function(){

  }

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

//

function Snake(){
  this.x = 0;
  this.y = 0;

  this.update = function(op){
    if(op == 'R') this.x += scl;
    if(op == 'L') this.x -= scl;
    if(op == 'U') this.y -= scl;
    if(op == 'D') this.y += scl;
    if(op == 'I') console.log(op);
    if(op == 'O') console.log(op);

    
    //ERROR
  }

  this.show = function(){
    fill(255,0,0);
    rect(this.x, this.y, scl, scl);
  }
  
}
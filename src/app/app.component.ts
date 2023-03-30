import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'ImageGallery';
  images=new Array();
  heights=new Array();
  bgs=new Array();
  cols=new Array(3);
  num=0;
  r=0;
  g=0;
  b=0;
  split=new Array(6);
  styleObj={};
  dis=false;
  ngOnInit(): void {
    this.dynImages();
    this.dynHeights();
    this.dynbg();
    setInterval(()=>{
      this.images=[];
      this.heights=[];
      this.bgs=[];
    this.dynImages();
    this.dynHeights();
    this.dynbg();
    
    
  },3000)
  
  }
  dynHeights(){
for(let i=0;i<18;i++){
  this.num=Math.floor(Math.random()*351);
  if(this.num<=100){
    this.num=100+Math.floor(Math.random()*101);
    this.heights.push(`${this.num}px`);
  }
  else{
    this.heights.push(`${this.num}px`);
  }
}

  }
  dynbg(){
    for(let i=0;i<18;i++){
      this.r=Math.floor(Math.random()*256);
      this.g=Math.floor(Math.random()*256);
      this.b=Math.floor(Math.random()*256);
      this.bgs.push(`rgb(${this.r},${this.g},${this.b})`);
      
    }
    
      }
  dynImages(){
    for(let i=0;i<1000;i++){
      this.num=Math.floor(Math.random()*19);
      console.log(this.num);
    if(this.num!=0){
      if(this.images.length==0)
      this.images.push(`assets/${this.num}.jpg`);
      else{
        var y=1;
        for(let x=0;x<this.images.length;x++){
          if(`assets/${this.num}.jpg`==this.images[x]){
          console.log("numbers:"+this.num);
           y++;
           console.log("repeats:"+y);
          }
         }
        if(y==1){
          this.images.push(`assets/${this.num}.jpg`);
        }
      }
     
    }
    if(this.images.length==18){
    console.log("breaked:"+i)
    break;}
  }
  
  }
}


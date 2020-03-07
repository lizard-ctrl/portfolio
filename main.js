
/*let person ={
	"firstname":"Taylor",
	"lastname":"Paydos",
	"age":21
};

console.log(person);
console.log("im fucking working");*/





$.getJSON("https://api.myjson.com/bins/1caxqw", (data)=>{
        let portfolio=data.projects;
console.log(data.projects);

 for(let i=0; i<portfolio.length; i++){
   $(".json-container").append(portfolio[i].name+ "   " + portfolio[i].date + "   ");

}


    })

    $("document").ready(function(){
        function getData(quote){
          $.ajax({
            url: "https://api.adviceslip.com/advice",
            success: function(data) {
              handleData(data)
            }
          });
        }
    
        var quote = "print"
        getData(quote)
    
       function handleData(data){
         console.log(data);
    
         var result = $.parseJSON( data );
         console.log(result.slip.advice)
         $("#quote").html(result.slip.advice)
       }
})

var vmin=2;
var vmax=5;
var vr=2;
var timer1;

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function Chip(chipname,width,height){
 this.named=chipname;
 this.vx=vmin+vmax*Math.random();
 this.vy=vmin+vmax*Math.random();
 this.w=width+20;
 this.h=height;
 this.xx=0;
 this.yy=0;
 this.timer1=null;
}

function movechip(chipname){
if (document.getElementById){
eval("chip="+chipname);
   if (window.innerWidth || window.opera){
		 pageX=window.pageXOffset;
     pageW=window.innerWidth-40;
     pageY=window.pageYOffset;
     pageH=window.innerHeight-20;
    }
   else if (document.body){
		 pageX=iecompattest().scrollLeft;
     pageW=iecompattest().offsetWidth-40;
     pageY=iecompattest().scrollTop;
     pageH=iecompattest().offsetHeight-20;
    } 

   chip.xx=chip.xx+chip.vx;
   chip.yy=chip.yy+chip.vy;
   
   chip.vx+=vr*(Math.random()-0.5);
   chip.vy+=vr*(Math.random()-0.5);
   if(chip.vx>(vmax+vmin))  chip.vx=(vmax+vmin)*2-chip.vx;
   if(chip.vx<(-vmax-vmin)) chip.vx=(-vmax-vmin)*2-chip.vx;
   if(chip.vy>(vmax+vmin))  chip.vy=(vmax+vmin)*2-chip.vy;
   if(chip.vy<(-vmax-vmin)) chip.vy=(-vmax-vmin)*2-chip.vy;

   if(chip.xx<=pageX){
			chip.xx=pageX;
      chip.vx=vmin+vmax*Math.random();
     }
   if(chip.xx>=pageX+pageW-chip.w){
			chip.xx=pageX+pageW-chip.w;
      chip.vx=-vmin-vmax*Math.random();
     }
   if(chip.yy<=pageY)
     {chip.yy=pageY;
      chip.vy=vmin+vmax*Math.random();
     }
   if(chip.yy>=pageY+pageH-chip.h)
     {chip.yy=pageY+pageH-chip.h;
      chip.vy=-vmin-vmax*Math.random();
     }

document.getElementById(chip.named).style.left=chip.xx+"px";
document.getElementById(chip.named).style.top=chip.yy+"px";


   chip.timer1=setTimeout("movechip('"+chip.named+"')",100);
  }
}

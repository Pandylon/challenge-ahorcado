
 canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
function canvasIncio(){
    
        
        ctx.clearRect(0,0,canvas.width,canvas.height);
        
       ctx.beginPath();
    
       ctx.moveTo(30,200);
       ctx.lineTo(30,10);
       ctx.lineTo(30,50);
       ctx.lineTo(150,10);
       ctx.lineTo(150,20);
       
       
      
       ctx.lineWidth=4;
       ctx.stroke();
}

       function dibujar(){
       
      
        
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');
            if(vidas==5){
                canvasIncio();
            }
            
           
        
        /*cabeza*/
            if(vidas==4){
                
                ctx.beginPath();
                ctx.arc(150,40,20,0,Math.PI *2);
                ctx.stroke();
                
                        }
      
         /*cuerpo */  
            if(vidas==3){   
          
                ctx.beginPath();
                ctx.moveTo(150,60);
                ctx.lineTo(150,100);
                ctx.stroke();}
      
        /* brazo*/   
            if(vidas==2){ 
            
                ctx.beginPath();
                ctx.moveTo(150,60);
                ctx.lineTo(130,100);
                ctx.stroke();
            
           
              
      /*brazo */
                ctx.beginPath();
                ctx.moveTo(150,60);
                ctx.lineTo(170,100);
                ctx.stroke();
            }
    /* pierna*/  
            if(vidas<=1){
            
                ctx.beginPath();
                ctx.moveTo(150,100);
                ctx.lineTo(170,130);
                ctx.stroke();
      
                ctx.beginPath();
                ctx.moveTo(150,100);
                ctx.lineTo(130,130);
                ctx.stroke()
            }
                 
    }
       
        }
      
    
    

       
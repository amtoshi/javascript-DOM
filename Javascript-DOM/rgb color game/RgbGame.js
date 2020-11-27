var square=document.querySelectorAll(".square")
var colorLabel=document.querySelector("span")
var status=document.querySelector("#answer")
var randomArray=[]
var bodyColor=document.querySelector("body")
var correct="correct!"



if(square&&status)
{
    
    for(i=0;i<square.length;i++)
    {
        
        var red=Math.floor(Math.random()*200+55)
        var green=Math.floor(Math.random()*200+55)
        var blue=Math.floor(Math.random()*200+55)
        var color="rgb(" + red + ", " + green + ", " + blue + ")"
         
        // store  colors in random array to choose one as question later
        randomArray.push(color)
        square[i].style.background=color
        //displaying the colors in that cycle
        console.log(red +","+ green+ "," + blue)
        console.log( i +"square selected" )
        
    }
    // picking out the sample rgb value to become question...
    var tempNumb=Math.floor(Math.random()*5)
    //console logging temp number
            console.log(tempNumb)
            var chosenColor=randomArray[tempNumb]
            console.log(chosenColor)
            colorLabel.textContent=chosenColor


        for(i=0;i<square.length;i++)
        {
            console.log( i + ' click functionalityy added')
                //adding click event to ALL
            square[i].addEventListener("click",function(){
                    {
                        if(this.style.background===chosenColor) {
                            
                            status.textContent="correct"

                            bodyColor.style.background=chosenColor
                            for(i=0;i<square.length;i++){
                                square[i].style.background=chosenColor
                            }

                        }   
                        else{
                            status.textContent="ohh No! try again.."
                            this.style.background="#232323"   
                            }

                        
                        }  
                })
        }


}
    


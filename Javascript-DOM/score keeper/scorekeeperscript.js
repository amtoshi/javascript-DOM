

// alert("test")

var p1 = document.querySelector("#p1")
var p2 = document.getElementById("p2") 
var reset = document.getElementById("reset") 
var scoreDisplay = document.querySelector("h1")

if(p1){
    p1.addEventListener("click", 
    function(){console.log("wassup from p1")
                            alert("p1 clicked")

})
}
else{
    console.log("failed")
}


// p2.addEventListener("click", function(){console.log("wassup from p2")})




// alert("test")
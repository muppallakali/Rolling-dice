var x=0
var y=0
var z=0
document.getElementById("reset").onclick=function(){
    x=Math.floor (Math.random()*6)+1
    y=Math.floor (Math.random()*6)+1
    z=Math.floor (Math.random()*6)+1
    document.getElementById("die1").innerHTML="The first die turns to be: "+x
    document.getElementById("die2").innerHTML="The second die turns to be: "+y
    document.getElementById("die3").innerHTML="The third die turns to be: "+z
}
var i = 0;
var j = 4;
function next(){
    document.getElementById("image" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("image" + (i+1)).classList.add("active");
}
function back(){
    document.getElementById("image" + (i+1)).classList.remove("active");
    i = ( j + i - 1) % j;
    document.getElementById("image" + (i+1)).classList.add("active");
}
setInterval(next , 5000);
function nevegation(){
    document.getElementById("image" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("image" + (i+1)).classList.add("active");
}
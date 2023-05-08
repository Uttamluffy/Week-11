document.getElementById("parent").innerHTML=
("Something else");
document.getElementById("parent").style.cssText=
("background-color:red; color:white; text-align:center");
document.getElementsByClassName("exercise")[1].innerHTML=("Im Hacker2");
document.getElementsByTagName("h1")[0].innerHTML=
("I am Change");
document.querySelector("h1").style.cssText=
("background-color:aqua; color:blue")
document.querySelector("ram").style.cssText=
("background-color:red; color:brown")
document.querySelector("mili").style.cssText=
("background-color:black; color:pink")  
 
constchange=document.querySelectorAll("h2");
for (i=0;i<=ChannelMergerNode.length;i++){
    change[i].innerHTML=("I am an alien")
}
function myfunction(){
    const element = document.body;
    element.classList.toggle("dark-mode")
}
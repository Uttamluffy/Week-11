function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
       button.textContent="Light Mode";
    }else{
        button.textContent="Dark Mode";
    }
}

const textchange = document.querySelector("#change");
const values = ["a Student", "a anime", "a king"];
let counter = 0;designer
setInterval(()=>{
    textchange.textContent=values[counter];
    counter=(counter+1)%values.length;
},3000);



const loop = setInterval(() => {
    
    if(localStorage.getItem("purple")=="true"){
        lyth();
       
    }
   
   

}   , 1000);




function darkm(){
   
    
    document.querySelector("body").style.backgroundColor="#20232a";
    document.querySelector("h2").style.color="";
    document.querySelector("h3").style.color="";
    document.querySelector("h4").style.color="";
    localStorage.clear("purple", "true");


}
function lyth(){
    document.querySelector("body").style.backgroundColor="purple";
    
    localStorage.setItem("purple", "true");
   
   



   



}



const loop = setInterval(() => {
    
    if(localStorage.getItem("purple")=="true"){
        lyth();
       
    }
   
   

}   , 1000);




function darkm(){
   
    
    document.querySelector("body").style.backgroundColor="#20232a";
   
    document.querySelector("h4").style.color="";
    document.querySelector("h2").style.color="";  
    document.querySelector("h1").style.color="";
   
    
    localStorage.clear("purple", "true");


}
function lyth(){

    document.querySelector("body").style.backgroundColor="#c2c3c7";

   
    document.querySelector("h4").style.color="#171219";
    document.querySelector("h2").style.color="#171219";  
    document.querySelector("h1").style.color="#2f4143";
    
    localStorage.setItem("purple", "true");
   
   



   



}


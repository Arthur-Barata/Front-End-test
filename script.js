


let drop = document.getElementById("dropdown")
let arrow= document.getElementById("features_arrow")
let drop_dois=document.getElementById("dropdown2")
let arrow_dois = document.getElementById("company_arrow")
let lis1=document.getElementsByClassName("off")[0]
let lis2=document.getElementsByClassName("off")[1]
let lis3=document.getElementsByClassName("off")[2]
let mobile_menu =document.getElementById("mobile_menu")
function drop1(){

    if(drop.style.display=="block"){
        drop.style.display="none"
        arrow.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    }
    else{
       $("#dropdown").slideDown()
        arrow.style.backgroundImage="url(./images/icon-arrow-up.svg)"
         drop.style.display="block"
    }    
   

}


 function hide(element){
    element.style.display="none"
    arrow.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    arrow_dois.style.backgroundImage="url(./images/icon-arrow-down.svg)"
  
 }


 function drop2(){
    if(drop_dois.style.display=="none"){
        $("#dropdown2").slideDown()
        drop_dois.style.display="inline-block"
        arrow_dois.style.backgroundImage="url(./images/icon-arrow-up.svg)"
    }
    else{
        
        drop_dois.style.display="none"
        arrow_dois.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    }

 }
 function btn(){
     lis1.classList.toggle("active")
     lis2.classList.toggle("active")
     lis3.classList.toggle("active")
     mobile_menu.classList.toggle("active")
     
  

 }

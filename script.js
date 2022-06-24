


let drop = document.getElementById("dropdown")
let arrow= document.getElementById("features_arrow")
let drop_dois=document.getElementById("dropdown2")
let arrow_dois = document.getElementById("company_arrow")
let lis1=document.getElementsByClassName("off")[0]
let lis2=document.getElementsByClassName("off")[1]
let lis3=document.getElementsByClassName("off")[2]
let mobile_menu =document.getElementById("mobile_menu")
let all=document.getElementsByClassName("all")[0]
let imagem =document.getElementById("mainImage")
let container =document.getElementById("mainContainer")
let drop_mobile1=document.getElementById("dropdown_mobile")
let drop_mobile2=document.getElementById("dropdown2_mobile")


function drop1(){

    if(drop.style.display=="inline-block"){
        drop.style.display="none"
        arrow.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    }
    else{
       $("#dropdown").slideDown()
        arrow.style.backgroundImage="url(./images/icon-arrow-up.svg)"
         drop.style.display="inline-block"
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
     all.classList.toggle("active")
     imagem.classList.toggle("active")
     container.classList.toggle("active")
     
  

 }

 function features_btn(){
    
    drop_mobile1.classList.toggle("active")
    
    
 }
 function company_btn(){
    
    drop_mobile2.classList.toggle("active")
    
    
 }
 
 //deixei de usar essas duas funcoes acima para usar o slideDown do jquery
 // mas vou deixar aqui

 function drop_mobile(){

    if(drop_mobile1.style.display=="inline-block"){
        $("#dropdown_mobile").slideUp()
        arrow.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    }
    else{
       $("#dropdown_mobile").slideDown()
        arrow.style.backgroundImage="url(./images/icon-arrow-up.svg)"
        drop_mobile1.style.display="inline-block"
    }
 }


function drop2_mobile(){

    if(drop_mobile2.style.display=="inline-block"){
        $("#dropdown2_mobile").slideUp()
        arrow.style.backgroundImage="url(./images/icon-arrow-down.svg)"
     }
    else{
           $("#dropdown2_mobile").slideDown()
            arrow.style.backgroundImage="url(./images/icon-arrow-up.svg)"
            drop_mobile2.style.display="inline-block"
     }        
   
}







let drop = document.getElementById("dropdown")
let arrow= document.getElementById("features_arrow")
let drop_dois=document.getElementById("dropdown2")
let arrow_dois = document.getElementById("company_arrow")
function drop1(){

    if(drop.style.display=="block"){
        drop.style.display="none"
        arrow.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    }
    else{
        drop.style.display="block"
        arrow.style.backgroundImage="url(./images/icon-arrow-up.svg)"
        
    }    
   

}


 function hide(element){
    element.style.display="none"
    arrow.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    arrow_dois.style.backgroundImage="url(./images/icon-arrow-down.svg)"
  
 }


 function drop2(){
    if(drop_dois.style.display=="none"){
        drop_dois.style.display="inline-block"
        arrow_dois.style.backgroundImage="url(./images/icon-arrow-up.svg)"
    }
    else{
        drop_dois.style.display="none"
        arrow_dois.style.backgroundImage="url(./images/icon-arrow-down.svg)"
    }

 }

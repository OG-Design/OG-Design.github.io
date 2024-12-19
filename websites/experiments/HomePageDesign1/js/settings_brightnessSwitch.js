
function baseCol_1_bg() {
    let baseCol_1_bg_jsAll = document.querySelectorAll(".baseCol_1_bg");
    
    idBaseCol1_bg="baseCol_bg_";
    

    if ( baseCol_1_bg_jsAll != null) {

        for(i=0 ; i < baseCol_1_bg_jsAll.length; i++ ){
        
            let idMake = baseCol_1_bg_jsAll[i].id=idBaseCol1_bg+ i;
            
            document.getElementById(idMake).setAttribute("class"(".baseCol_1_bg"));
            document.getElementById(idMake).removeAttribute("class",".baseCol_1_bg");

        };


    }
    
}

baseCol_1_bg();
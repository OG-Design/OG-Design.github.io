document.getElementById("brightnessSwitch_html").addEventListener("click", themeSwitch1);

// let brightnessDark = {
//     brightnessDark_save = false,
// }



// localStorage.setItem('options_brightnessDark', JSON.stringify() );

// function checkBrightness() {
//     if (brightnessDark == true) {
//         brightnessDark = false;
//     } else {
//         brightnessDark = true;
//     }
// }






function themeSwitch1() {

    // checkBrightness();
    

    localStorage.getItem('options_brightnessDark');

    let logoImg_jsBright = document.getElementById("pageLogoImg").src="/img/SVG/OG_LOGO.svg";
    let logoImg_jsDark = document.getElementById("pageLogoImg").src="/img/SVG/OG_LOGO.svg";
    let logoImg_js = document.getElementById("pageLogoImg");
   




    // bgColors definition --START
    // baseColorsSelection
    let baseCol_1_bg_jsAll = document.querySelectorAll(".baseCol_1_bg");
    let baseCol_1_bgDark_jsAll = document.querySelectorAll(".baseCol_1_bgDark");

    let baseCol_2_bg_jsAll = document.querySelectorAll(".baseCol_2_bg");
    let baseCol_2_bgDark_jsAll =document.querySelectorAll(".baseCol_2_bgDark");


    // secondaryColorsSelection
    let secoCol_1_bg_jsAll = document.querySelectorAll(".secoCol_1_bg");
    let secoCol_1_bgDark_jsAll = document.querySelectorAll(".secoCol_1_bgDark");

    // secondaryColorsSelection
    let secoCol_2_bg_jsAll = document.querySelectorAll(".secoCol_2_bg");
    let secoCol_2_bgDark_jsAll = document.querySelectorAll(".secoCol_2_bgDark");

    // secondaryColorsSelection
    let secoCol_3_bg_jsAll = document.querySelectorAll(".secoCol_3_bg");
    let secoCol_3_bgDark_jsAll = document.querySelectorAll(".secoCol_3_bgDark");



    // secondaryColorsSelection
    let keysCol_1_bg_jsAll = document.querySelectorAll(".keysCol_1_bg");
    let keysCol_1_bgDark_jsAll = document.querySelectorAll(".keysCol_1_bgDark");

    let keysCol_2_bg_jsAll = document.querySelectorAll(".keysCol_2_bg");
    let keysCol_2_bgDark_jsAll = document.querySelectorAll(".keysCol_2_bgDark");

    // bgColors definition --END

    
    
    
    // colors definition --START

    let baseCol_1_jsAll = document.querySelectorAll(".baseCol_1");
    let baseCol_1Dark_jsAll = document.querySelectorAll(".baseCol_1Dark");


    let secoCol_1_jsAll = document.querySelectorAll(".secoCol_1");
    let secoCol_1Dark_jsAll = document.querySelectorAll(".secoCol_1Dark");


    let secoCol_2_jsAll = document.querySelectorAll(".secoCol_2");
    let secoCol_2Dark_jsAll = document.querySelectorAll(".secoCol_2Dark");



    let keysCol_1_jsAll = document.querySelectorAll(".keysCol_1");
    let keysCol_1Dark_jsAll = document.querySelectorAll(".keysCol_1Dark");
    


    // colors definition --END


    // SHADOWS
    let shade1_js = document.querySelectorAll("shade_1");
    let shade1Dark_js = document.querySelectorAll("shade_1Dark");

    // colorArrays
    // let colors_bg_jsAll = [baseCol_1_bg_jsAll, SecoCol_1_bg_jsAll];
    // let colors_bg_jsAllDark = [baseCol_1_bgDark_jsAll, SecoCol_1_bg_jsAllDark];

    // gives colors id
    let col_Id="col_id_";
    

    


    // col_bg statements --START
    // baseCol1
    if ( baseCol_1_bg_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < baseCol_1_bg_jsAll.length; i++ ) {
    
            // defines ele as ...
            let ele = baseCol_1_bg_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");
            

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = baseCol_1_bg_jsAll[i].id=col_Id+ i;
            
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("baseCol_1_bgDark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("baseCol_1_bg");
            
            // removes id
            idGet.removeAttribute("id");

            // sets ele id as atr
            ele.id=atr;

            // debug
            // console.log(ele, atr);
        }
        

    }

    // baseCol1Dark
    if (baseCol_1_bgDark_jsAll != null) {


        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < baseCol_1_bgDark_jsAll.length; i++ ) {
        
            // defines ele as ...
            let ele = baseCol_1_bgDark_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");
            

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = baseCol_1_bgDark_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);

            // adds a class to each baseCol element using id
            idGet.classList.add("baseCol_1_bg");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("baseCol_1_bgDark");
            
            // removes id
            idGet.removeAttribute("id");
            
            // sets ele id as atr
            ele.id=atr;
            
        }

        
    }


        // baseCol2
        if ( baseCol_2_bg_jsAll != null) {

            // for loop to assign id to each element, aswell as giving it a different class.
            for( i = 0 ; i < baseCol_2_bg_jsAll.length; i++ ) {
            
                // defines ele as ...
                let ele = baseCol_2_bg_jsAll[i];
                // saves atr as id atribute
                let atr = ele.getAttribute("id");
            

                // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
                let idMake = baseCol_2_bg_jsAll[i].id=col_Id+ i;
                let idGet = document.getElementById(idMake);
                
                // adds a class to each baseCol element using id
                idGet.classList.add("baseCol_2_bgDark");
    
                // removes a class from each baseCol element using id           
                idGet.classList.remove("baseCol_2_bg");
                
                // removes id
                idGet.removeAttribute("id");

                // sets ele id as atr
                ele.id=atr;
            }
    
    
        }
    
        // baseCol2Dark
        if (baseCol_2_bgDark_jsAll != null) {
    
            


            // for loop to assign id to each element, aswell as giving it a different class.
            for( i = 0 ; i < baseCol_2_bgDark_jsAll.length; i++ ) {
            
                // defines ele as ...
                let ele = baseCol_2_bgDark_jsAll[i];
                // saves atr as id atribute
                let atr = ele.getAttribute("id");

                // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
                let idMake = baseCol_2_bgDark_jsAll[i].id=col_Id+ i;
                let idGet = document.getElementById(idMake);
    
                // adds a class to each baseCol element using id
                idGet.classList.add("baseCol_2_bg");
    
                // removes a class from each baseCol element using id           
                idGet.classList.remove("baseCol_2_bgDark");
                
                // removes id
                idGet.removeAttribute("id");
    
                // sets ele id as atr
                ele.id=atr;
            }
    
    
        }


    // secoCol1
    if ( secoCol_1_bg_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < secoCol_1_bg_jsAll.length; i++ ) {
        
            // defines ele as ...
            let ele = secoCol_1_bg_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = secoCol_1_bg_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("secoCol_1_bgDark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("secoCol_1_bg");
            
            // removes id
            idGet.removeAttribute("id");
        
            // sets ele id as atr
            ele.id=atr;
        }


    }

    // secoCol1Dark
    if (secoCol_1_bgDark_jsAll != null) {


        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < secoCol_1_bgDark_jsAll.length; i++ ) {
        

            // defines ele as ...
            let ele = secoCol_1_bgDark_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = secoCol_1_bgDark_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);

            // adds a class to each baseCol element using id
            idGet.classList.add("secoCol_1_bg");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("secoCol_1_bgDark");
            
            // removes id
            idGet.removeAttribute("id");

            // sets ele id as atr
            ele.id=atr;
        }


    }


    // secoCol2
    if ( secoCol_2_bg_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < secoCol_2_bg_jsAll.length; i++ ) {
            
            // defines ele as ...
            let ele = secoCol_2_bg_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = secoCol_2_bg_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("secoCol_2_bgDark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("secoCol_2_bg");
            
            // removes id
            idGet.removeAttribute("id");
        
            // sets ele id as atr
            ele.id=atr;
        }


    }

    // secoCol2Dark
    if (secoCol_2_bgDark_jsAll != null) {


        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < secoCol_2_bgDark_jsAll.length; i++ ) {
            
            // defines ele as ...
            let ele = secoCol_2_bgDark_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = secoCol_2_bgDark_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);

            // adds a class to each baseCol element using id
            idGet.classList.add("secoCol_2_bg");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("secoCol_2_bgDark");
            
            // removes id
            idGet.removeAttribute("id");

            // sets ele id as atr
            ele.id=atr;
        }


    }

    // secoCol2
    if ( secoCol_3_bg_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < secoCol_3_bg_jsAll.length; i++ ) {
            
            // defines ele as ...
            let ele = secoCol_3_bg_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = secoCol_3_bg_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("secoCol_3_bgDark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("secoCol_3_bg");
            
            // removes id
            idGet.removeAttribute("id");
        
            // sets ele id as atr
            ele.id=atr;
        }


    }




    // secoCol2Dark
    if (secoCol_3_bgDark_jsAll != null) {


        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < secoCol_3_bgDark_jsAll.length; i++ ) {
            
            // defines ele as ...
            let ele = secoCol_3_bgDark_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = secoCol_3_bgDark_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);

            // adds a class to each baseCol element using id
            idGet.classList.add("secoCol_3_bg");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("secoCol_3_bgDark");
            
            // removes id
            idGet.removeAttribute("id");

            // sets ele id as atr
            ele.id=atr;
        }


    }

    // keysCol1
    if ( keysCol_1_bg_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < keysCol_1_bg_jsAll.length; i++ ) {
            

            // defines ele as ...
            let ele = keysCol_1_bg_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = keysCol_1_bg_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("keysCol_1_bgDark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("keysCol_1_bg");
            
            // removes id
            idGet.removeAttribute("id");
        
            // sets ele id as atr
            ele.id=atr;
        }


    }

    // keysCol1Dark
    if (keysCol_1_bgDark_jsAll != null) {


        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < keysCol_1_bgDark_jsAll.length; i++ ) {
        
            // defines ele as ...
            let ele = keysCol_1_bgDark_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = keysCol_1_bgDark_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);

            // adds a class to each baseCol element using id
            idGet.classList.add("keysCol_1_bg");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("keysCol_1_bgDark");
            
            // removes id
            idGet.removeAttribute("id");

            // sets ele id as atr
            ele.id=atr;
        }


    }

    // keysCol1
    if ( keysCol_2_bg_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < keysCol_2_bg_jsAll.length; i++ ) {
            

            // defines ele as ...
            let ele = keysCol_2_bg_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = keysCol_2_bg_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("keysCol_2_bgDark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("keysCol_2_bg");
            
            // removes id
            idGet.removeAttribute("id");
        
            // sets ele id as atr
            ele.id=atr;
        }


    }

    // keysCol1Dark
    if (keysCol_2_bgDark_jsAll != null) {


        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < keysCol_2_bgDark_jsAll.length; i++ ) {
        
            // defines ele as ...
            let ele = keysCol_2_bgDark_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = keysCol_2_bgDark_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);

            // adds a class to each baseCol element using id
            idGet.classList.add("keysCol_2_bg");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("keysCol_2_bgDark");
            
            // removes id
            idGet.removeAttribute("id");

            // sets ele id as atr
            ele.id=atr;
        }


    }




    
    // col_bg statements --END


    // col statements --START

// secoCol1
if ( baseCol_1_jsAll != null) {

    // for loop to assign id to each element, aswell as giving it a different class.
    for( i = 0 ; i < baseCol_1_jsAll.length; i++ ) {

        // defines ele as ...
        let ele = baseCol_1_jsAll[i];
        // saves atr as id atribute
        let atr = ele.getAttribute("id");
    
        // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
        let idMake = baseCol_1_jsAll[i].id=col_Id+ i;
        let idGet = document.getElementById(idMake);
        
        // adds a class to each baseCol element using id
        idGet.classList.add("baseCol_1Dark");

        // removes a class from each baseCol element using id           
        idGet.classList.remove("baseCol_1");
        
        // removes id
        idGet.removeAttribute("id");
    
        // sets ele id as atr
        ele.id=atr;
    }


}

// secoCol1
if ( baseCol_1Dark_jsAll != null) {

    // for loop to assign id to each element, aswell as giving it a different class.
    for( i = 0 ; i < baseCol_1Dark_jsAll.length; i++ ) {

        // defines ele as ...
        let ele = baseCol_1Dark_jsAll[i];
        // saves atr as id atribute
        let atr = ele.getAttribute("id");
    
        // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
        let idMake = baseCol_1Dark_jsAll[i].id=col_Id+ i;
        let idGet = document.getElementById(idMake);
        
        // adds a class to each baseCol element using id
        idGet.classList.add("baseCol_1");

        // removes a class from each baseCol element using id           
        idGet.classList.remove("baseCol_1Dark");
        
        // removes id
        idGet.removeAttribute("id");
    
        // sets ele id as atr
        ele.id=atr;
    }


}    



// secoCol1
if ( secoCol_1_jsAll != null) {

    // for loop to assign id to each element, aswell as giving it a different class.
    for( i = 0 ; i < secoCol_1_jsAll.length; i++ ) {
    
        // defines ele as ...
        let ele = secoCol_1_jsAll[i];
        // saves atr as id atribute
        let atr = ele.getAttribute("id");
        
        // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
        let idMake = secoCol_1_jsAll[i].id=col_Id+ i;
        let idGet = document.getElementById(idMake);
        
        // adds a class to each baseCol element using id
        idGet.classList.add("secoCol_1Dark");

        // removes a class from each baseCol element using id           
        idGet.classList.remove("secoCol_1");
        
        // removes id
        idGet.removeAttribute("id");
    
        // sets ele id as atr
        ele.id=atr;
    }


}

// secoCol1
if ( secoCol_1Dark_jsAll != null) {

    // for loop to assign id to each element, aswell as giving it a different class.
    for( i = 0 ; i < secoCol_1Dark_jsAll.length; i++ ) {
    
        // defines ele as ...
        let ele = secoCol_1Dark_jsAll[i];
        // saves atr as id atribute
        let atr = ele.getAttribute("id");



        // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
        let idMake = secoCol_1Dark_jsAll[i].id=col_Id+ i;
        let idGet = document.getElementById(idMake);
        
        // adds a class to each baseCol element using id
        idGet.classList.add("secoCol_1");

        // removes a class from each baseCol element using id           
        idGet.classList.remove("secoCol_1Dark");
        
        // removes id
        idGet.removeAttribute("id");
    
        // sets ele id as atr
        ele.id=atr;
    }


}    







// secoCol2
if ( secoCol_2_jsAll != null) {

    // for loop to assign id to each element, aswell as giving it a different class.
    for( i = 0 ; i < secoCol_2_jsAll.length; i++ ) {
    
        // defines ele as ...
        let ele = secoCol_2_jsAll[i];
        // saves atr as id atribute
        let atr = ele.getAttribute("id");
        


        // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
        let idMake = secoCol_2_jsAll[i].id=col_Id+ i;
        let idGet = document.getElementById(idMake);
        
        // adds a class to each baseCol element using id
        idGet.classList.add("secoCol_1Dark");

        // removes a class from each baseCol element using id           
        idGet.classList.remove("secoCol_1");
        
        // removes id
        idGet.removeAttribute("id");
    
    
        // sets ele id as atr
        ele.id=atr;
    }



}

// secoCol2
if ( secoCol_2Dark_jsAll != null) {

    // for loop to assign id to each element, aswell as giving it a different class.
    for( i = 0 ; i < secoCol_2Dark_jsAll.length; i++ ) {

        // defines ele as ...
        let ele = secoCol_2Dark_jsAll[i];
        // saves atr as id atribute
        let atr = ele.getAttribute("id");

        // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
        let idMake = secoCol_2Dark_jsAll[i].id=col_Id+ i;
        let idGet = document.getElementById(idMake);
        
        // adds a class to each baseCol element using id
        idGet.classList.add("secoCol_1");

        // removes a class from each baseCol element using id           
        idGet.classList.remove("secoCol_1Dark");
        
        // removes id
        idGet.removeAttribute("id");
    
        // sets ele id as atr
        ele.id=atr;
    }


}    



    // keysCol1
    if ( keysCol_1_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < keysCol_1_jsAll.length; i++ ) {
        
            // defines ele as ...
            let ele = keysCol_1_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = keysCol_1_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("keysCol_1Dark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("keysCol_1");
            
            // removes id
            idGet.removeAttribute("id");



            // imgBrightMode
            logoImg_js.src="/img/SVG/OG_LOGO.svg";
        
            // sets ele id as atr
            ele.id=atr;
        }


    }

    // keysCol1
    if ( keysCol_1Dark_jsAll != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < keysCol_1Dark_jsAll.length; i++ ) {
        
            // defines ele as ...
            let ele = keysCol_1Dark_jsAll[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");



            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = keysCol_1Dark_jsAll[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("keysCol_1");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("keysCol_1Dark");
            
            // removes id
            idGet.removeAttribute("id");


            // imgDarkMode
            logoImg_js.src="/img/SVG/OG_LOGO_black.svg";
        

            // sets ele id as atr
            ele.id=atr;

        }


    }





    
    // col statements --END
    

     // shadeHover
     if ( shade1_js != null) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < shade1_js.length; i++ ) {
            
            // defines ele as ...
            let ele = shade1_js[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = shade1_js[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);
            
            // adds a class to each baseCol element using id
            idGet.classList.add("shade_1Dark");

            // removes a class from each baseCol element using id           
            idGet.classList.remove("shade1");
            
            // removes id
            idGet.removeAttribute("id");
        
            // sets ele id as atr
            ele.id=atr;
        }
        

    }

    // baseCol1Dark
    if (shade1Dark_js != null) {


        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < shade1Dark_js.length; i++ ) {
        

            // defines ele as ...
            let ele = shade1Dark_js[i];
            // saves atr as id atribute
            let atr = ele.getAttribute("id");

            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = shade1Dark_js[i].id=col_Id+ i;
            let idGet = document.getElementById(idMake);

            // adds a class to each baseCol element using id
            idGet.classList.add(shade1_js);

            // removes a class from each baseCol element using id           
            idGet.classList.remove(shade1_Dark_js);
            
            // removes id
            idGet.removeAttribute("id");   
        
            // sets ele id as atr
            ele.id=atr;
        }

        
    }





    // reloadCSS
    function reloadCSSLinks() {
        let links = document.getElementsByTagName("link");
        Array.from(links).filter(link => link.rel.toLocaleLowerCase()==="stylesheet" && link.href).forEach(link => {let url = new URL(link.href, location.href);
            url.searchParams.set("forceReload", Date.now());
            link.href = url.href;
        });
    }

    // reloadCSSLinks();
}

// baseCol_1_bg();

// checkBrightness();
document.getElementById("brightnessSwitch_html").addEventListener("click", baseCol_1_bg)



function baseCol_1_bg() {
    let baseCol_1_bg_jsAll = document.querySelectorAll(".baseCol_1_bg");
    let baseCol_1_bgDark_jsAll = document.querySelectorAll(".baseCol_1_bgDark");
    idBaseCol1_bg="baseCol_bg_";
    

    if ( baseCol_1_bg_jsAll != null ) {

        // for loop to assign id to each element, aswell as giving it a different class.
        for( i = 0 ; i < baseCol_1_bg_jsAll.length; i++ ) {
        
            // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
            let idMake = baseCol_1_bg_jsAll[i].id=idBaseCol1_bg+ i;
            

            document.getElementById(idMake).removeAttribute.className="baseCol_1_bg";
            
            // document.getElementById(idMake).setAttribute("class","baseCol_1_bgDark");            
            
            document.getElementById(idMake).classList.remove("baseCol_1_bg");
        }


    } 
    // else if ( baseCol_1_bgDark_jsAll != null ) {


    //     // for loop to assign id to each element, aswell as giving it a different class.
    //     for( i = 0 ; i < baseCol_1_bg_jsAll.length; i++ ) {
        
    //         // defines baseCol_1_bg id, adds i to id to give different id to each element/run.
    //         let idMake = baseCol_1_bg_jsAll[i].id=idBaseCol1_bg+ i;
            
    //         document.getElementById(idMake).setAttribute("class","baseCol_1_bgDark");
    //         document.getElementById(idMake).removeClass("baseCol_1_bg");
            
            
    //     }


    // }
    
    // reloadCSS
    function reloadCSSLinks() {
        let links = document.getElementsByTagName("link");
        Array.from(links).filter(link => link.rel.toLocaleLowerCase()==="stylesheet" && link.href).forEach(link => {let url = new URL(link.href, location.href);
            url.searchParams.set("forceReload", Date.now());
            link.href = url.href;
        });
    }

    reloadCSSLinks();
}

// baseCol_1_bg();

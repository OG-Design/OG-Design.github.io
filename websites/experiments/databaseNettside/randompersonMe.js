// create a container element
let container1 = document.createElement("div");

container1;

container1.classList.add("container1");

document.body.appendChild(container1);

let profilestitle = document.createElement("h1");
profilestitle.style.width="100%";
profilestitle.innerText="New profiles";

container1.appendChild(profilestitle);

async function randomperson() {
    
    // response from api
    const res = await fetch('https://randomuser.me/api/?results=50');
    const data = await res.json();
    
    // loop to display all results
    for (let ia = 0; ia < data.results.length; ia++) {
    
        // get data
        const pers = data.results[ia];
        let nameFirst = pers.name.first;
        let nameLast = pers.name.last;
        let gender = pers.gender;
        let profileImg = pers.picture.medium;
        
        // check
        console.log(data.results[ia]);
        console.log("First name. "+data.results[ia].name.first+". ");
        console.log(profileImg);

        // creates a simple card for pers
        function card() {
            console.log("cardActive");
            
            // create card
            let card = document.createElement("div");
        
            

            // style
            let styleCard = card.style;  
                
            
            // shape card
            styleCard.width="fit-content";
            styleCard.minWidth="10rem";
            styleCard.padding="1rem";
            styleCard.margin=".5rem";
            styleCard.borderRadius="var(--borderradius)";


            // positionChild card
            styleCard.display="flex";
            styleCard.flexDirection="column";

            // color card
            styleCard.backgroundColor="var(--primary1)";

            

            
            
            
            
            // place card in HTML
            container1.appendChild(card);


            // cardchildren
            // createImg
            let profileImgElement = document.createElement("img");

            // create gender
            let genderCard = document.createElement("div");
            
            // create name
            let nameCard = document.createElement("div");

            

            // styleChild
            let styleChild = [nameCard.style, genderCard.style, profileImgElement.style];
            // loop to change array item's style
            for (let i = 0; i < styleChild.length; i++) {
                const element = styleChild[i];
                element.backgroundColor="var(--primary2)";
                element.borderRadius="var(--borderradius)";
                element.margin=".5rem"
                element.padding=".5rem"
                console.log(element);    
            }
            
            
            // PROFILEIMG __START
            profileImgElement.src=profileImg;
            card.appendChild(profileImgElement);
            // PROFILEIMG __END

            // NAME CARD __START    
            let name = nameFirst+". "+nameLast;
            nameCard.innerHTML=name;
            card.appendChild(nameCard);
            // NAME CARD __END

            // GENDER CARD __START
            genderCard.innerHTML=gender;
            card.appendChild(genderCard);
            // GENDER CARD __END
        };

        card();
    }

}

randomperson();





//Business logic

function displaySuperman()  {
    
    document.getElementById("avenger1").style.display;
}

function displaySpiderman() {
    document.getElementById("avenger2").style.display = "block";
}

function displayIronman()   {
    document.getElementById("avenger3").style.display = "block";
}

function displayHulk()  {
    document.getElementById("avenger4").style.display = "block";
}

function displayCaptainAmerica()    {
    document.getElementById("avenger5").style.display = "block";
}

function displayBatman()    {
    document.getElementById("avenger6").style.display = "block";
}


//User Interface
function displayAvenger()   {
    let Selection = document.getElementById("character");
    let mySelection = characterChoices.character
    let displayCharacter = document.getElementById("avengerName");
    displayCharacter.innerHTML = mySelection[mySelection.selectedIndex].value;
    console.log(displayCharacter);
    
    
    
    if (mySelection === 'Superman') {
        displaySuperman();
    } else if (mySelection === 'Hulk')  {
        displayHulk();
    } else if (mySelection === 'Ironman')   {
        displayIronman();
    } else if (mySelection === 'Captainamerica')    {
        displayCaptainAmerica();
    } else if (mySelection === 'Spiderman') {
        displaySpiderman();
    } else if (mySelection === 'Batman')    {
        displayBatman();
    }
}
/*window.addEventListener("load", (event) => {
    event.preventDefault();
    console.log("page fully loaded");
}  /*{
    
    displayAvenger();
    dropdown.addEventListener("change", function()  {
        alert(this.mySelection);
    }, false);
    console.log(mySelection);*/
//}
//);
window.onload = (event) => {
    console.log("Page is fully loaded");
    const dropdown = document.getElementById("character");
    dropdown.addEventListener("change", displayAvenger );
    displayAvenger();
}


 
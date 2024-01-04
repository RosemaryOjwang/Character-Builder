//Business logic

function displaySuperman()  {
    
    document.getElementById("avenger1").style.display = "block";
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
    let mySelection = characterChoices.character
    let displayCharacter = document.getElementById("avengerName");
    let selection = mySelection[mySelection.selectedIndex].value;
    displayCharacter.innerText = selection;
    console.log(displayCharacter);
    
    
    
    if (selection === 'Superman') {
        displaySuperman();
    } else if (selection === 'Hulk')  {
        displayHulk();
    } else if (selection === 'Ironman')   {
        displayIronman();
    } else if (selection === 'Captainamerica')    {
        displayCaptainAmerica();
    } else if (selection === 'Spiderman') {
        displaySpiderman();
    } else if (selection === 'Batman')    {
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
    //displayAvenger();
}


 
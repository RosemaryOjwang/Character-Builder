//Business logic
//display Superman image
function displaySuperman()  {
    
    document.getElementById("avenger1").style.display = "block";
    document.getElementById("avenger2").style.display = "none";
    document.getElementById("avenger3").style.display = "none";
    document.getElementById("avenger4").style.display = "none";
    document.getElementById("avenger5").style.display = "none";
    document.getElementById("avenger6").style.display = "none";
}
//display Spider-man image
function displaySpiderman() {
    document.getElementById("avenger2").style.display = "block";
    document.getElementById("avenger1").style.display = "none";
    document.getElementById("avenger3").style.display = "none";
    document.getElementById("avenger4").style.display = "none";
    document.getElementById("avenger5").style.display = "none";
    document.getElementById("avenger6").style.display = "none";
}
//display Iron Man image
function displayIronman()   {
    document.getElementById("avenger3").style.display = "block";
    document.getElementById("avenger1").style.display = "none";
    document.getElementById("avenger2").style.display = "none";
    document.getElementById("avenger4").style.display = "none";
    document.getElementById("avenger5").style.display = "none";
    document.getElementById("avenger6").style.display = "none";
}
//display Hulk image
function displayHulk()  {
    document.getElementById("avenger4").style.display = "block";
    document.getElementById("avenger1").style.display = "none";
    document.getElementById("avenger2").style.display = "none";
    document.getElementById("avenger3").style.display = "none";
    document.getElementById("avenger5").style.display = "none";
    document.getElementById("avenger6").style.display = "none";
}
//display Captain America Image
function displayCaptainAmerica()    {
    document.getElementById("avenger5").style.display = "block";
    document.getElementById("avenger1").style.display = "none";
    document.getElementById("avenger2").style.display = "none";
    document.getElementById("avenger3").style.display = "none";
    document.getElementById("avenger4").style.display = "none";
    document.getElementById("avenger6").style.display = "none";
}
//display Batman image
function displayBatman()    {
    document.getElementById("avenger6").style.display = "block";
    document.getElementById("avenger1").style.display = "none";
    document.getElementById("avenger2").style.display = "none";
    document.getElementById("avenger3").style.display = "none";
    document.getElementById("avenger4").style.display = "none";
    document.getElementById("avenger5").style.display = "none";
}


//User Interface
function displayAvenger()   {
    let mySelection = characterChoices.character
    let displayCharacter = document.getElementById("avengerName");
    //get selection from HTML form
    let selection = mySelection[mySelection.selectedIndex].value;
    displayCharacter.innerText = mySelection[mySelection.selectedIndex].text;
     
    
    
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

window.onload = (event) => {
    const dropdown = document.getElementById("character");
    dropdown.addEventListener("change", displayAvenger );
}


 
//Business logic
let mySelection = document.getElementById("character").value;
function displaySuperman()  {
    
    document.getElementById("avenger1").style.display;
}

function displaySpiderman() {
    document.getElementById("avenger2").style.display;
}

function displayIronman()   {
    document.getElementById("avenger3").style.display;
}

function displayHulk()  {
    document.getElementById("avenger4").style.display;
}

function displayCaptainAmerica()    {
    document.getElementById("avenger5").style.display;
}

function displayBatman()    {
    document.getElementById("avenger6").style.display;
}


//User Interface
function displayAvenger(event)   {
    event.preventDefault();
    
    
    document.getElementById("avengerName").innerHTML = selection;
    
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
window.addEventListener("load", function()  {
    console.log(selection);
    const form = document.getElementById("characterChoices");
    form.addEventListener("submit", displayAvenger);
});



 
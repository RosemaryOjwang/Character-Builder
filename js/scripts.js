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
/*function displayAvenger(event)   {
    
    event.preventDefault();
    let mySelection = document.getElementById("character").value;
    console.log(mySelection);
    
    document.getElementById("avengerName").innerHTML = mySelection;
    
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
}*/
/*window.addEventListener("load", (event) => {
    event.preventDefault();
    console.log("page fully loaded");
}  /*{
    const dropdown = document.getElementById("character");
    displayAvenger();
    dropdown.addEventListener("change", function()  {
        alert(this.mySelection);
    }, false);
    console.log(mySelection);*/
//}
//);
window.onload = (event) => {
    console.log("Page is fully loaded");
}


 
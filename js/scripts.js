//User Interface
function displayAvenger(event)   {
    event.preventDefault();
    
    let selection = document.getElementById("character").value;
    document.getElementById("avengerName").innerHTML = selection;
    
    if (selection === 'Superman') {
        document.getElementById("avenger1").style.display;
    } else if (selection === 'Hulk')  {
        document.getElementById("avenger4").style.display;
    } else if (selection === 'Ironman')   {
        document.getElementById("avenger3").style.display;
    } else if (selection === 'Captainamerica')    {
        document.getElementById("avenger5").style.display;
    } else if (selection === 'Spiderman') {
        document.getElementById("avenger2").style.display;
    } else if (selection === 'Batman')    {
        document.getElementById("avenger6").style.display;
    }
}
window.addEventListener("load", function()  {
    console.log(selection);
    const form = document.getElementById("characterChoices");
    form.addEventListener("submit", displayAvenger);
});



 
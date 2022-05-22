



//Store the generated number in LocalStorage with key "

document.querySelector("#throw_dice").addEventListener("click", myFunction);

function myFunction() {
    
    var randomNum = Math.ceil(Math.random() * 6);

    localStorage.setItem("number", JSON.stringify(randomNum));

    window.location.href = "display.html";
}
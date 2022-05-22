


var randomNum = JSON.parse(localStorage.getItem("number"));
var show = document.querySelector("#show_number");
show.innerText = randomNum





if (randomNum == 1) {
    show.style.color = "yellow";
    show.style.fontSize = "50px";
}
else if (randomNum == 6) {
    show.style.color = "green";
    show.style.fontSize = "50px";
}
else {
    show.style.color = "red";
    show.style.fontSize = "50px";
}
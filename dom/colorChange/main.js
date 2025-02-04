// changing color daynamically.
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let change = document.querySelector("#change");

change.addEventListener('click', ()=> {
    document.body.style.background = color1.value;
    document.body.style.color = color2.value;
});

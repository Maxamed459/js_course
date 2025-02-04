// dom manipulation

// let click = document.querySelector("#Click");
// click.addEventListener('click', ()=> {
//     document.querySelector("h1").innerHTML = "Clicked the button";
// });

// let form = document.querySelector("form");
// let btn = document.querySelector("#btn");

// btn.addEventListener('click', ()=>{
//     let pname = document.querySelector(".name").value;
//     // let place = document.querySelector(".place");
//     console.log(`the name is ${pname}`)
// });

// form.addEventListener('click', (e)=> {
//     e.preventDefault();
    
    
// });

// keyboard events.
let typing = document.getElementById("typing");
let clone = document.getElementById("clone");

typing.addEventListener('keyup', ()=> {
    clone.innerHTML = typing.value;
});

typing.addEventListener('keyup', ()=> {
    if (typing.value == "") {
        typing.style.border = "10px solid red";
    }
    else {
        typing.style.border = "10px solid green";
    }
});
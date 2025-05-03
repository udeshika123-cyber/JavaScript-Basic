var button = document.getElementById("click");
button.addEventListener("clicked", doSomething);

function doSomething(event){
    console.log(event);
}

document.addEventListener("keyup", function(event){
    console.log(event.key);
})


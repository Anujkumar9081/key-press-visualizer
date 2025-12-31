let h1 = document.querySelector("h1");
window.addEventListener("keydown" , function(de){
    if(de.key === " "){
        h1.textContent = "SPACE";
    }
    else{h1.textContent = de.key;}
})
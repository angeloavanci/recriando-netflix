let tema = document.getElementById("tema");

let xs = document.querySelectorAll(".claro");

function trocarCor(xs){
     for(x of xs){
          x.classList.remove("claro");
          x.classList.add("escuro");
     }
     return x;
}

tema.addEventListener("change", trocarCor(xs));
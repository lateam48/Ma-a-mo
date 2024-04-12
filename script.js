// declaration de variables
let box_boulangerie = document.querySelector("#boulangerie");
let box_cosmetique = document.querySelector("#cosmetique");
let btn_boulangerie = document.querySelector("#btn_boulangerie");
let btn_cosmetique = document.querySelector("#btn_cosmetique");
let presentation_blg = document.querySelector("#presentation-blg");
let presentation_cos = document.querySelector("#presentation-cos");
let home = document.querySelector(".home");
let boulangerie_blg = document.querySelector(".boulangerie.blg");


const boulangerie_click= () =>{
    btn_boulangerie.addEventListener("click", ()=>{
        box_cosmetique.classList.add('blg');
        box_boulangerie.classList.remove("blg");
        presentation_blg.classList.add('about_blg');
        presentation_cos.classList.remove('about_cos');
        home.style.display = "flex"

    })
} 

const cosmetique_click = () =>{
    btn_cosmetique.addEventListener("click", () =>{
        box_boulangerie.classList.add('blg');
        box_cosmetique.classList.remove("blg");
        presentation_cos.classList.add('about_cos');
        presentation_blg.classList.remove("about_blg");
        home.style.display = "flex"
    } )
}


  
boulangerie_click();
cosmetique_click();

// boulangerie_blg.addEventListener('animationend', function() {
//     box_boulangerie.style.display = 'none';
    
//   });



// declaration de variables
let box_boulangerie = document.querySelector("#boulangerie");
let box_cosmetique = document.querySelector("#cosmetique");
let btn_boulangerie = document.querySelector("#btn_boulangerie");
let btn_cosmetique = document.querySelector("#btn_cosmetique");
let about_blg = document.querySelector("#presentation-blg");
let about_cos = document.querySelector("#presentation-cos");
let home = document.querySelector(".home");
let logo_gen = document.querySelector("#logo_gen");
let logo_blg = document.querySelector("#logo_blg");
let logo_cos = document.querySelector("#logo_cos");
let blg_paragraph = document.querySelector("#blg_paragraph");

let boulangerie_blg = document.querySelector(".boulangerie.blg");
let boulangerie_link = document.querySelector("#boulangerie_link");
let cosmetique_link = document.querySelector("#cosmetique_link");

let navbar = document.querySelectorAll("nav a");



function acceuil_click() {
    home.classList.add("home_defil2");
    home.classList.remove("home_defil1");
    logo_gen.classList.remove("fuite_logo_cos");
    logo_cos.classList.remove("fade_logo_cos");
    home.classList.remove("home_defil");
    logo_gen.classList.remove("fuite_logo");
    logo_blg.classList.remove("fade_logo_blg");

    
}


function boulangerie_click() {
    home.classList.add("home_defil");
    logo_gen.classList.add("fuite_logo");
    logo_blg.classList.add("fade_logo_blg");
    console.log(blg_paragraph); 
    blg_paragraph.style.visibility = "hidden";
    // retirer les class ajouter sur l'element cosmetique
    home.classList.remove("home_defil1");
    logo_gen.classList.remove("fuite_logo_cos");
    logo_cos.classList.remove("fade_logo_cos");
    home.classList.remove("home_defil2");

}

function cosmetique_click() {
    home.classList.add("home_defil1");
    logo_gen.classList.add("fuite_logo_cos");
    logo_cos.classList.add("fade_logo_cos");
    // retirer les class ajouter sur l'element boulangerie
    home.classList.remove("home_defil");
    logo_gen.classList.remove("fuite_logo");
    logo_blg.classList.remove("fade_logo_blg");
    home.classList.remove("home_defil2");

}

function fosso_click(parametre) {
    console.log('dsuiqfhgsdkghsgio');
    navbar.forEach(element => {
        element.classList.remove("link_active");
    });
    
    switch (parametre) {
        case 'cosmetique_click':

            cosmetique_click();
            break;
        case 'boulangerie_click':
            boulangerie_click();
            break;
        default:
            break;
    }
}
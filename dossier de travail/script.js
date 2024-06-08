// declaration de variables

// const box_header_boulangerie_image = document.querySelector("#header_boulangerie_image");
// const header_cosmetique_image = document.querySelector("#header_cosmetique_image");
// const btn_boulangerie = document.querySelector("#btn_boulangerie");
// const btn_cosmetique = document.querySelector("#btn_cosmetique");
// const about_blg = document.querySelector("#presentation-blg");
// const about_cos = document.querySelector("#presentation-cos");
const home = document.querySelector(".home");
const logo_gen = document.querySelector("#logo_gen");
const logo_blg = document.querySelector("#logo_blg");
const logo_cos = document.querySelector("#logo_cos");
const blg_paragraph = document.querySelector("#blg_paragraph");
const cos_paragraph = document.querySelector("cos_paragraph");
const navbar = document.querySelectorAll("nav a");
// const boulangerie_blg = document.querySelector(".boulangerie.blg");
// const boulangerie_link = document.querySelector("#boulangerie_link");
// const cosmetique_link = document.querySelector("#cosmetique_link");


// ajoute la classe link active pour que le 
//lien acceuil soit souligne quand on est sur le home

navbar[0].classList.add('link_active');

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien acceuil ou pour recharger la page

function acceuil_click() {
    home.classList.add("home_defil2");
    home.classList.remove("home_defil1");
    logo_gen.classList.remove("fuite_logo_cos");
    logo_cos.classList.remove("fade_logo_cos");
    home.classList.remove("home_defil");
    logo_gen.classList.remove("fuite_logo");
    logo_blg.classList.remove("fade_logo_blg");
    navbar[0].classList.add("link_active");
    blg_paragraph.style.visibility = "visible";
    cos_paragraph.style.visibility = "visible";
    
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien cosmetique ou bouton cosmetique

function cosmetique_click() {
    home.classList.add("home_defil1");
    logo_gen.classList.add("fuite_logo_cos");
    logo_cos.classList.add("fade_logo_cos");
    cos_paragraph.style.visibility = "hidden";
    // retirer les class ajouter sur l'element boulangerie
    home.classList.remove("home_defil");
    logo_gen.classList.remove("fuite_logo");
    logo_blg.classList.remove("fade_logo_blg");
    home.classList.remove("home_defil2");
    navbar[1].classList.add("link_active");
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien boulqngerie ou bouton boulqngerie

function boulangerie_click() {
    home.classList.add("home_defil");
    logo_gen.classList.add("fuite_logo");
    logo_blg.classList.add("fade_logo_blg");
    blg_paragraph.style.visibility = "hidden";
    // retirer les class ajouter sur l'element cosmetique
    home.classList.remove("home_defil1");
    logo_gen.classList.remove("fuite_logo_cos");
    logo_cos.classList.remove("fade_logo_cos");
    home.classList.remove("home_defil2");
    navbar[2].classList.add("link_active");

}


function contact_click() {
    navbar[3].classList.add("link_active");
}

function apropos_click() {
    navbar[4].classList.add("link_active");
}
function fosso_click(parametre) {

    navbar.forEach(element => {
        element.classList.remove("link_active");
    });
    

    switch (parametre) {
        case 'acceuil':
            acceuil_click();
            break;
        case 'cosmetique':

            cosmetique_click();
            break;
        case 'boulangerie':
            boulangerie_click();
            break;
        case 'contact':
            contact_click();
            break;
        case 'apropos':
            apropos_click();
            break;
        default:
            break;
    }
}
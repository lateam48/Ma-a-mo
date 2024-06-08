// declaration de variables


const containerWrapper = document.querySelector(".container_wrapper");
const logo_gen = document.querySelector("#logo_gen");
const logo_blg = document.querySelector("#logo_blg");
const logo_cos = document.querySelector("#logo_cos");
const blg_paragraph = document.querySelector("#blg_paragraph");
const cos_paragraph = document.querySelector("cos_paragraph");
const navLink = document.querySelectorAll(".navigation_link");
const body = document.querySelector("body");
console.log(navLink)

// ajoute la classe link active pour que le 
//lien acceuil soit souligne quand on est sur le containerWrapper

navLink[0].classList.add('link_active');

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien acceuil ou pour recharger la page

function acceuil_click() {
    body.style.overflowY = 'hidden';
    navLink[0].classList.add("link_active");
    containerWrapper.classList.add("home_defil2");
    containerWrapper.classList.remove("home_defil1");
    logo_gen.classList.remove("fuite_logo_cos");
    logo_cos.classList.remove("fade_logo_cos");
    containerWrapper.classList.remove("home_defil");
    logo_gen.classList.remove("fuite_logo");
    logo_blg.classList.remove("fade_logo_blg");
    
    blg_paragraph.style.visibility = "visible";
    cos_paragraph.style.visibility = "visible";
    
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien cosmetique ou bouton cosmetique

function cosmetique_click() {
    body.style.overflowY = 'visible';
    navLink[1].classList.add("link_active");
    containerWrapper.classList.add("home_defil1");
    logo_gen.classList.add("fuite_logo_cos");
    logo_cos.classList.add("fade_logo_cos");
    cos_paragraph.style.visibility = "hidden";

    // retirer les class ajouter sur l'element boulangerie
    containerWrapper.classList.remove("home_defil");
    logo_gen.classList.remove("fuite_logo");
    logo_blg.classList.remove("fade_logo_blg");
    containerWrapper.classList.remove("home_defil2");
    
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien boulqngerie ou bouton boulangerie

function boulangerie_click() {
    navLink[2].classList.add("link_active");
    containerWrapper.classList.add("home_defil");
    logo_gen.classList.add("fuite_logo");
    logo_blg.classList.add("fade_logo_blg");
    blg_paragraph.style.visibility = "hidden";

    body.style.overflowY = 'visible';
    // retirer les class ajouter sur l'element cosmetique
    containerWrapper.classList.remove("home_defil1");
    logo_gen.classList.remove("fuite_logo_cos");
    logo_cos.classList.remove("fade_logo_cos");
    containerWrapper.classList.remove("home_defil2");
    

}


function contact_click() {
    navLink[3].classList.add("link_active");
}

function apropos_click() {
    navLink[4].classList.add("link_active");
}
function fosso_click(parametre) {

    navLink.forEach(element => {
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
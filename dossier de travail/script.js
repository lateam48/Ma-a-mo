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

function initialization() {
    navLink.forEach(element => {
       element.classList.remove('link_active');
    });
}


//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien acceuil ou pour recharger la page

function acceuil_click() {
    initialization()
    navLink[0].classList.add('link_active');
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien cosmetique ou bouton cosmetique

function cosmetique_click() {
    initialization();
    navLink[1].classList.add('link_active');
    
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien boulqngerie ou bouton boulangerie

function boulangerie_click() {
    initialization();
    navLink[2].classList.add('link_active');

}


function contact_click() {
    initialization();
    navLink[3].classList.add('link_active');
}



// function fosso_click(parametre) {

//     navLink.forEach(element => {
//         element.classList.remove("link_active");
//     });
    

//     switch (parametre) {
//         case 'acceuil':
//             acceuil_click();
//             break;
//         case 'cosmetique':

//             cosmetique_click();
//             break;
//         case 'boulangerie':
//             boulangerie_click();
//             break;
//         case 'contact':
//             contact_click();
//             break;
//         case 'apropos':
//             apropos_click();
//             break;
//         default:
//             break;
//     }
// }
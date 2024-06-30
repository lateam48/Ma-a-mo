// declaration de variables

const contact = document.querySelector('.contact');
const containerWrapper = document.querySelector(".container_wrapper");
const logo_gen = document.querySelector("#logo_gen");
const logo_blg = document.querySelector("#logo_blg");
const logo_cos = document.querySelector("#logo_cos");
const blgParagraph = document.querySelector("#blg_paragraph");
const cosParagraph = document.querySelector("#cos_paragraph");
const navLink = document.querySelectorAll(".navigation_link");
const body = document.querySelector("body");
const header = document.querySelector('.navigation');
const headerHeight = header.offsetHeight;   // Obtenir la hauteur initiale du header


let localisation = 1 // repersente les differents endroit du site
// 1 accueil
// 2 cosmetique
// 3 boulangerie
// 4 contact
// 5 footer





// ajoute la classe link active pour que le 
//lien acceuil soit souligne quand on est sur le containerWrapper

navLink[0].classList.add('link_active');

function initialization() {
    containerWrapper.style.transform = `translateX(0vw)`
    navLink.forEach(element => {
       element.classList.remove('link_active');
    });
    body.style.overflowY = 'hidden'

}


//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien acceuil ou pour recharger la page

function acceuil_click() {
    initialization()
    navLink[0].classList.add('link_active'); //pour souligner  le lien dans le navbar
    cosParagraph.style.display = 'block'
    blgParagraph.style.display = 'block'
    localisation = 1;
    
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien cosmetique ou bouton cosmetique

function cosmetique_click() {
    initialization();
    navLink[1].classList.add('link_active'); //pour souligner  le lien dans le navbar 
    containerWrapper.style.transform = `translateX(50vw)`
    body.style.overflowY = 'scroll'
    cosParagraph.style.display = 'none'
    localisation = 2;
    
}

//fonction pour les modifications qui s'applique lorsqu'on
// clique sur le lien boulqngerie ou bouton boulangerie

function boulangerie_click() {
    initialization();
    navLink[2].classList.add('link_active'); //pour souligner  le lien dans le navbar 
    containerWrapper.style.transform = `translate(-50vw)`
    body.style.overflowY = 'scroll'
    blgParagraph.style.display = 'none'
    localisation = 3;
}
let random =  Math.floor(Math.random() * 2);
console.log(random);

function contact_click() {
    initialization();
    navLink[3].classList.add('link_active'); //pour souligner  le lien contact  dans le navbar 
    switch (localisation) {
        case 1:
            
            if(random === 0){
                containerWrapper.style.transform = `translateX(50vw)`
            }
            else{
                containerWrapper.style.transform = `translateX(-50vw)`
            }

            break;
        case 2:
            containerWrapper.style.transform = `translateX(50vw)`
            
            break;
        case 3:
            containerWrapper.style.transform = `translateX(-50vw)`
            
            break;
        case 4:
            
            break;
        default:
            break;
    }
    body.style.overflowY = 'scroll'
    localisation = 4;
}

// fonction pour reduire la taille du header fixe au scroll

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        header.style.height = headerHeight - 35 + 'px';
        
        navLink.forEach(element => {
            element.style.fontSize = '1rem';
         });
    }
     else {

        header.style.height = headerHeight + 'px';

        navLink.forEach(element => {
            element.style.fontSize = '1.3rem'
         });
    }
});


function checkVisibility() {

    const rect = contact.getBoundingClientRect(); // Obtenir les dimensions et la position de la section contact
    const top = rect.top; //extrait la position haut de la section.
    const bottom = rect.bottom; //extrait la position bas de la section.
    const viewportHeight = window.innerHeight;
  
    const visibleRatio = (bottom - top) / viewportHeight; // Calculer le ratio de visibilité
  
    if (top >= 0 && bottom <= window.innerHeight) {
        navLink.forEach(element => {
            element.classList.remove('link_active');
         });
      navLink[3].classList.add('link_active');

      
    } else {
      if (random === 0) {
        navLink.forEach(element => {
            element.classList.remove('link_active');
         });
      navLink[1].classList.add('link_active');
        
      }
      if(random === 1){
        navLink.forEach(element => {
            element.classList.remove('link_active');
         });
      navLink[2].classList.add('link_active');

      }
      navLink[3].classList.remove('link_active');

    }
  }
  
  window.addEventListener('scroll', checkVisibility);



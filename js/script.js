// Copio Array con oggetti come da consegna

const arrayimages = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

// Stampo Elementi HTML dentro Slider

// bersaglio lo slider
const sliderElement = document.getElementById("slider");

// bersaglio il contenitore delle antemprime
const asideElement = document.querySelector("#aside-anteprime");

//  Stampo in slider title, image and text e anteprime
arrayimages.forEach((currentElement, index) => {

    // Creo un div per ogni elemento dell'arrayimages
    let slideElement = document.createElement("section");
    slideElement.classList.add("slide");

    // Creo nuovi elementi HTML per nome e posizioni
    let imageElement = document.createElement("img");

    let titleElement = document.createElement("div");
    titleElement.classList.add("title");

    let textElement = document.createElement("div");
    textElement.classList.add("text");

    // Cambio l'immagine prendendo l'URL dall'array corrente
    imageElement.src = `${currentElement.image}`;
    imageElement.alt = "Immagine slider";

    // Inserisco testo dentro div
    titleElement.innerText = `${currentElement.title}`;
    textElement.innerText = `${currentElement.text}`;


    // Aggiungo l'immagine, il titolo e il testo al div slide
    slideElement.append(imageElement);
    slideElement.append(titleElement);
    slideElement.append(textElement);

    // Aggiungo il div slide al slider
    sliderElement.append(slideElement);

    // Li metto tutti in display none
    slideElement.classList.add("hidden");

    // Mostro solo il primo elemento
    if (index == 0) {
        slideElement.classList.remove("hidden");
    }

    // inserisco l'anteprima dentro l'elemento #thumbnails
    asideElement.innerHTML += `
        <div class="anteprima">
            <img src="./${currentElement.image}" alt="anteprima ${index + 1}">
        </div>
    `;  

});

// Comportamento carosello

// -  salvo un contatore della slide

let slideNumber = 1;

// -  QUANDO premo la freccia SU
document.querySelector("#up-arrow").addEventListener("click", function() {


    if (slideNumber < arrayimages.length) {

        // - prendo l'immagine attuale e le aggiungo la classe "hidden"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("hidden");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le rimuovo la classe "hidden"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("hidden");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le aggiungo la classe "hidden"   
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("hidden");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le rimuovo la classe "hidden"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("hidden");

    }

        
});


document.querySelector("#down-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le aggiungo la classe "hidden"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("hidden");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le rimuovo la classe "hidden"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("hidden");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le aggiungo la classe "hidden" 
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("hidden");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = arrayimages.length;

        // - prendo l'immagine con il nuovo contatore e le rimuovo la classe "hidden" 
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("hidden");

    }
    


});
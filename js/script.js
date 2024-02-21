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

// bersaglio lo slider
const sliderElement = document.getElementById("slider");

// bersaglio il contenitore delle antemprime
const asideElement = document.querySelector("#aside-anteprime");

//  Stampo slider e anteprime
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

// bersaglio le antemprime
const antemprimaElements = document.querySelectorAll(".anteprima");

// Event listener per le anteprime
antemprimaElements.forEach(function(element, index) {
    element.addEventListener("click", function() {

        // Nascondo tutti gli slider
        document.querySelectorAll(".slide").forEach(function(slide) {
            slide.classList.add("hidden");
        });

        // Determino il numero di slide corrispondente all'anteprima su cui è stato fatto clic
        const slideToShow = index + 1;

        // Mostro lo slide corrispondente
        document.querySelector(`.slide:nth-of-type(${slideToShow})`).classList.remove("hidden");

        // Aggiorno la variabile slideNumber 
        slideNumber = slideToShow;
    });
});


// COMPORTAMNTO SLIDER CON FRECCE

// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia giu - la slide successiva
document.querySelector("#down-arrow").addEventListener("click", function() {

    showNextSlide()
   
});

// -  QUANDO premo la freccia su - la slide precedente
document.querySelector("#up-arrow").addEventListener("click", function() {

    showPrevSlide()
    
});

// Funzione per mostrare la slide successiva
function showNextSlide() {

    // - prendo l'immagine attuale e le aggiungo la classe "hidden"  
    document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("hidden");

    // - utilizzo operatore terniario
    slideNumber = slideNumber < arrayimages.length ? slideNumber + 1 : 1;
        
    // - prendo l'immagine con il nuovo contatore e le rimuovo la classe "hidden"  
    document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("hidden");

}

// Funzione per mostrare la slide precedente
function showPrevSlide() {

    // - prendo l'immagine attuale e le aggiungo la classe "hidden"  
    document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("hidden");

    // - utilizzo operatore terniario
    slideNumber = slideNumber > 1 ? slideNumber - 1 : arrayimages.length;

    // - prendo l'immagine con il nuovo contatore e le rimuovo la classe "hidden"  
    document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("hidden");

}

// Comportamento bottoni Play, pause and reverse 

// dichiaro elementi pulsanti
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const reverseButton = document.querySelector("#reverse-button");

// evento per play 
playButton.addEventListener("click", function() {

    // Avvio l'autoplay
    startAutoplay();

    // Nascondo e metto visibile pausa
    playButton.style.display = "none";
    reverseButton.style.display = "none";
    pauseButton.style.display = "inline-block";

});

// evento per pausa
pauseButton.addEventListener("click", function() {

    // Interrompo l'autoplay
    stopAutoplay();

    // Nascondo pausa e metto visibile play e reverse
    playButton.style.display = "inline-block";
    reverseButton.style.display = "inline-block";
    pauseButton.style.display = "none";
});

// evento per reverse
reverseButton.addEventListener("click", function() {

    // Interrompo l'autoplay
    reverseAutoplay();

    // Nascondo e metto visibile pausa
    playButton.style.display = "none";
    reverseButton.style.display = "none";
    pauseButton.style.display = "inline-block";
});

// dichiaro autoplay
let autoplay;

// Funzione per avviare l'autoplay
function startAutoplay() {
    autoplay = setInterval(showNextSlide, 3000);
}

// Funzione per interrompere l'autoplay
function stopAutoplay() {

    clearInterval(autoplay);
    
}

// Funzione per invertire il meccanismo di autoplay
function reverseAutoplay() {
    
    autoplay = setInterval(showPrevSlide, 3000);

}

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

// PARTE 1 --> da modificare considerando l'array

// bersaglio lo slider
const sliderElement = document.getElementById("slider");

//  Stampo in slider title, image and text
for (let i = 0; i < arrayimages.length; i++) {

    // Creo un div per ogni elemento dell'arrayimages
    const slide = document.createElement("div");
    slide.classList.add("slide");

    // Creo nuovi elementi HTML per nome e posizioni
    let titleElement = document.createElement("div");
    let textElement = document.createElement("div");
    let imageElement = document.createElement("img");

    // Ciclo per iterare title, text and images dentro oggetti
    for (let key in arrayimages[i]) {

        let field = arrayimages[i][key];

        // Aggiungo dentro titleElement
        if (key === "title") {

            titleElement.innerText = field;

        // Aggiungo dentro textElement
        } else if (key === "text") {

            textElement.innerText = field;
        
        // Aggiungo immagine dentro imageElement
        } else if (key === "image") {

            // Cambio l'immagine prendendo l'URL dall'array
            let imageUrl = arrayimages[i][key];
            
            imageElement.src = `./${imageUrl}`;
            imageElement.alt = "Immagine slider";
        }

    }
    
    // Aggiungo l'immagine, il titolo e il testo al div slide
    slide.append(imageElement);
    slide.append(titleElement);
    slide.append(textElement);

    // Aggiungo il div slide al slider
    sliderElement.appendChild(slide);

}

// const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
// console.log(images);


// // tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
// for (let i = 0; i < images.length; i++) {

//     sliderElement.innerHTML += `<img src="./img/0${i + 1}.webp" alt="immagine ${i + 1}">`;

//     // per ognuno di essi andremo a creare un elemento img dentro lo slider

// }


// PARTE 2
// Parte da modificare in seguito prima devo inserire elementi in pagina da array
// Devo stare attento a nome elementi 

/*
-  salvo un contatore della slide
-  QUANDO premo la freccia SU
    - prendo l'immagine attuale e le rimuovo la classe "active"  
    - aumento il contatore di 1
    - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
*/


document.querySelector("#slider img:nth-of-type(1)").className = "active";
// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia SU
document.querySelector("#up-arrow").addEventListener("click", function() {


    if (slideNumber < imageElement.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    }

        
});


document.querySelector("#down-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    }
    


});
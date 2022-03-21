console.log('OK JS!!');

// definire un array di oggetti che rappresentano i membri del team
// ogni membro ha le informazioni necessarie per stampare la relativa card  "Nome, Ruolo e Foto"


// definire un array di oggetti che rappresentano i membri del team

const team = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': "img/wayne-barnett-founder-ceo.jpg"

    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': "img/angela-caroll-chief-editor.jpg"

    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': "img/walter-gordon-office-manager.jpg"

    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': "img/angela-lopez-social-media-manager.jpg"

    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': "img/scott-estrada-developer.jpg"

    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': "img/barbara-ramos-graphic-designer.jpg"

    }

];

// console.log(team);


// ogni membro ha le informazioni necessarie per stampare la relativa card  "Nome, Ruolo e Foto"
// creo costanti per ricreare il layout

for (let i = 0; i < team.length; i++) {

    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const image = document.createElement('img');

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    const title3 = document.createElement('h3');
    const paragraph = document.createElement('p');


    // creo la costante dove appendere le costanti appena create e così via man mano che "mi addentro"
    const teamContainer = document.querySelector(".team-container");

    teamContainer.appendChild(teamCard);

    teamCard.appendChild(cardImage);
    teamCard.appendChild(cardText);

    cardImage.appendChild(image);

    cardText.appendChild(title3);
    cardText.appendChild(paragraph);



    // oltre che appenderlo, devo collegare e usare gli oggetti
    let nameI = team[i];
    let nameDisplayed = nameI['nome'];               // primo modo in cui si può accedere

    // devo poi visualizzarlo
    title3.innerHTML = nameDisplayed;
    //console.log(nameDisplayed);


    // ripeto per il ruolo
    let roleI = team[i];
    let roleDisplayed = roleI.ruolo;                  // secondo modo per accedere

    // lo visualizzo (in questo caso nel paragrafo)
    paragraph.innerHTML = roleDisplayed;


    // ripero per l'immagine
    let imageI = team[i];
    let imageDisplayed = imageI["foto"];

    // lo visualizzo
    image.src = imageDisplayed;


}


// console.log(team[0].nome)
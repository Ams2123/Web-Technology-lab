var cities = []

// function to add a new city 
function AddCity(){
    let city = prompt("Enter your City ?");
    cities.push({name:city});
    createCard(city);
}

// to create the html element card

function createCard(city){
    let parent = document.getElementById('cityCont');
    let cardCont = document.createElement('div');
    card = document.createElement('div');
    fcard = document.createElement('div');
    bcard = document.createElement('div');
    cardCont.className = "cardContainer";
    card.className = 'card';
    fcard.className = "card_front";
    bcard.className = "card_back";
    fcard.textContent = city;
    bcard.textContent = city;
    card.append(fcard);
    card.append(bcard);
    cardCont.append(card);
    parent.appendChild(cardCont);
}
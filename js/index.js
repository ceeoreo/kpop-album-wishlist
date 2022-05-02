const addAnAlbumBtn = document.querySelector('.add-album-button');
const wishModalBg = document.querySelector('.wish-modal-bg');
const wishModal = document.querySelector('.wish-modal');
// wishModal is the var for the form pop up
const saveAlbumBtn = document.getElementById('add-button');
const cancelButton = document.getElementById('cancel');

const albumCardsDisplay = document.querySelector('.album-cards')
const albumName = document.getElementById('album');
const artistName = document.getElementById('artist');
const priceInput = document.getElementById('price');
const linkInput = document.getElementById('link');

const totalPriceDisplay = document.querySelector('.total-price');
//when cancel button is clicked, the wishModalBg is hidden again
//when saveAlbum is clicked, information from the form is 

//when add album is clicked, album form is no longer hidden
let initiateAdd = () => {
    wishModalBg.classList.add('active-bg');
}

addAnAlbumBtn.addEventListener('click', initiateAdd);

//when cancel button is clicked, album form is hidden again
let cancelAdd = () => {
    wishModalBg.classList.remove('active-bg');
}

cancelButton.addEventListener('click', cancelAdd);

//when add button is clicked, to save info,
// create album card div which contains p for album 
// artist price and list and add album form input to 
// their respective p
// this card will be displayed within album card display

// Create album card
let createAlbumCard = () => {
    let albumCard = document.createElement('div');
    albumCard.classList.add('album-card');

    let albumPar = document.createElement('p');
    let userAlbumAdd = albumName.value;
    albumPar.append(userAlbumAdd);
    albumCard.appendChild(albumPar);

    let artistPar = document.createElement('p');
    let userArtistAdd = artistName.value;
    artistPar.append(userArtistAdd);
    albumCard.appendChild(artistPar);

    let linkPar = document.createElement('p');
    let userLinkAdd = linkInput.value;
    linkPar.append(userLinkAdd);
    albumCard.appendChild(linkPar);

    let pricePar = document.createElement('p');
    pricePar.classList.add('prices');
    let userPriceAdd = priceInput.value;
    pricePar.append(userPriceAdd);
    albumCard.appendChild(pricePar);
    
    // let purchaseCheckBox = document.createElement('input');
    // purchaseCheckBox.type = "checkbox";
    // checkbox.name = "name";
    // checkbox.value = "value";
    // purchaseCheckBox.id = "purchase-checkbox";

    let purchaseLabel = document.createElement('label')
    purchaseLabel.htmlFor = "purchase-checkbox";
    purchaseLabel.appendChild(document.createTextNode('Purchased'));
    albumCard.appendChild(purchaseLabel);
    // albumCard.appendChild(purchaseCheckBox);
    return albumCard;
}

// Function for adding prices
let addAllPrices = () => {
    let allPrices = document.querySelectorAll('.prices');
    // let allPricesArr = Object.values(allPrices);

    // console.log(allPricesArr);
    // if (allPricesArr.length > 0) {
    //     let numAllPrices = allPricesArr.map(priceText => Number(priceText.textContent));
    //     numAllPrices.reduce((accumulator, currentValue) => {
    //         accumulator + currentValue;
    //         console.log(accumulator)
    //         totalPriceDisplay.append(accumulator);
    //         console.log('her')
    //     }
    // , 0);
    // } else {
    //     let price = allPricesArr[0];

    //     let priceNum = Number(price.textContent)
    //     console.log(priceNum);
    //     totalPriceDisplay.append(priceNum);
    // } 
    for (let i=0; i <allPrices.length; i++){
        let price = allPrices[i];

        let priceNum = Number(price.textContent);

        if (i === 0){
            totalPriceDisplay.append(priceNum);
        } else {
            // let currentPrice = ;
            console.log("hi");
        }
    }
}

// Add album card to display
let saveAlbumInfo = (event) => {
    event.preventDefault();

    let albumCardToDisplay = createAlbumCard();
    albumCardsDisplay.appendChild(albumCardToDisplay);
    addAllPrices();
}

saveAlbumBtn.addEventListener('click', saveAlbumInfo);
saveAlbumBtn.addEventListener('click', cancelAdd);

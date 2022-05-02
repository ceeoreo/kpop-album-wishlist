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

// Create album card function
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
    
    let purchaseLabel = document.createElement('label')
    purchaseLabel.htmlFor = "purchase-checkbox";
    purchaseLabel.appendChild(document.createTextNode('Purchased'));
    albumCard.appendChild(purchaseLabel);

    let purchaseCheckBox = document.createElement('input');
    purchaseCheckBox.type = "checkbox";
    purchaseCheckBox.id = "purchase-checkbox";
    albumCard.appendChild(purchaseCheckBox)

    return albumCard;
}

// Function for adding prices
let addAllPrices = () => {
    let allPrices = document.querySelectorAll('.prices');
    let length = allPrices.length;
    let curIndex = length - 1;
    let curPrice = allPrices[curIndex];
    let curPriceNum = Number(curPrice.textContent); 
}

let displayAllPrices = () => {
    let allPrices = document.querySelectorAll('.prices');
    let length = allPrices.length;
    let curIndex = length - 1;
    let curPrice = allPrices[curIndex];
    let curPriceNum = Number(curPrice.textContent);

    totalPriceDisplay.append(curPriceNum);

}

// previous price + current price

// Add album card to display
let saveAlbumInfo = (event) => {
    // stops submit which causes page refresh
    event.preventDefault();

    let albumCardToDisplay = createAlbumCard();
    albumCardsDisplay.appendChild(albumCardToDisplay);
    addAllPrices();

}

saveAlbumBtn.addEventListener('click', saveAlbumInfo);
saveAlbumBtn.addEventListener('click', cancelAdd);

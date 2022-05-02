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
    
    let purchaseLabel = document.createElement('label')
    purchaseLabel.htmlFor = "purchase-checkbox";
    purchaseLabel.appendChild(document.createTextNode('Purchased'));
    albumCard.appendChild(purchaseLabel);

    let purchaseCheckBox = document.createElement('input');
    purchaseCheckBox.type = "checkbox";
    purchaseCheckBox.id = "purchase-checkbox";
    albumCard.appendChild(purchaseCheckBox);

    return albumCard;
}


// Add album card to display
let saveAlbumInfo = (event) => {
    event.preventDefault();

    let albumCardToDisplay = createAlbumCard();
    albumCardsDisplay.appendChild(albumCardToDisplay);
}

saveAlbumBtn.addEventListener('click', saveAlbumInfo);
saveAlbumBtn.addEventListener('click', cancelAdd);

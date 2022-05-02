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
    // let albumPar = document.createElement('p');
    // let userAlbumAdd = albumName.innerText;

    // albumPar.append(userAlbumAdd);
    // albumCard.appendChild(albumPar);
    albumCard.innerHTML= `<p> hello </p>`
    return albumCard;
}

// Add album card to display

let saveAlbumInfo = () => {
    let albumCardToDisplay = createAlbumCard();
    albumCardsDisplay.appendChild(albumCardToDisplay);
    //append all those p's to the album card div
    // let userArtistAdd = artistName.innerText;
    // let userPriceAdd = priceInput.innerText;
    // let userLinkAdd = linkInput.innerText;

}

saveAlbumBtn.addEventListener('click', saveAlbumInfo);
saveAlbumBtn.addEventListener('click', cancelAdd);


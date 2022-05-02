const addAnAlbumBtn = document.querySelector('.add-album-button');
const wishModalBg = document.querySelector('.wish-modal-bg');
const wishModal = document.querySelector('.wish-modal');
// wishModal is the var for the form pop up
const saveAlbum = document.getElementById('add-button');
const cancelButton = document.getElementById('cancel');

//when addAnAlbumBtn is clicked, wishModalBg css property visibility is no longer hidden
//when cancel button is clicked, the wishModalBg is hidden again
//when saveAlbum is clicked, information from the form is 

let initiateAdd = () => {
    wishModalBg.classList.add('active-bg');
}

addAnAlbumBtn.addEventListener('click', initiateAdd);

let cancelAdd = () => {
    wishModalBg.classList.remove('active-bg');
}

cancelButton.addEventListener('click', cancelAdd);
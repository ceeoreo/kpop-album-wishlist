const addAnAlbumBtn = document.querySelector('.add-album-button');
const wishModalBg = document.querySelector('.wish-modal-bg');
const wishModal = document.querySelector('.wish-modal');
// wishModal is the var for the form pop up
const saveAlbum = document.getElementById('add-button');
const cancelButton = document.getElementById('cancel');

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


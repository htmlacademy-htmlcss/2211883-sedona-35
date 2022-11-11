function openPopup(popupId) {
  let popup = document.querySelector(popupId);
  if(popup != undefined) {
    popup.classList.remove('popup-closed');
  }
}

function closePopup(popupId) {
  let popup = document.querySelector('#search-hotels-popup');
  if(popup != undefined) {
    popup.classList.add('popup-closed');
  }
}

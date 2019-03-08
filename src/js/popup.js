let contact = document.getElementById('button');
let popup = document.getElementById('popup');

contact.addEventListener('click', function() {
  popup.classList.toggle('popup--visible');

  contact.innerHTML = 'Retour';
});
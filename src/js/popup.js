let contact = document.getElementById('button');
let popup = document.getElementById('popup');

contact.addEventListener('click', function() {
  popup.classList.toggle('popup--visible');
});

contact.addEventListener('click', function() {
  if (popup.className === 'popup--visible') {
    contact.innerHTML = 'Retour';
  } else {
    contact.innerHTML = 'Me contacter';
  };
});
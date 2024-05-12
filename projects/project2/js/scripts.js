// THEME SWITCHER
const themeSwitchButton = document.querySelector('#themeSwitchButton');
const body = document.querySelector('#body');

themeSwitchButton.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
});
//


//PHOTO GALLERY
var modal = document.getElementById("imageModal");

var span = document.getElementsByClassName("close")[0];

var images = document.getElementsByClassName("thumbnail");

var modalImg = document.getElementById("modalImage");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.getAttribute("data-image");
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//
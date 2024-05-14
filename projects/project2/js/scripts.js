// THEME SWITCHER
const themeSwitchButton = document.querySelector('#themeSwitchButton');
const body = document.querySelector('#body');

const theme = localStorage.getItem('theme');

if (theme) {
    document.body.classList.add(theme);
}

themeSwitchButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme','dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
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
//DATA DRIVEN CONTENT
$.ajax({
    url: 'js/blogposts.json',
    dataType: 'json',
    success: function(data) {
        console.log(data); // Log the data to check if it's being retrieved
        $.each(data, function(index, post) {
            var postElement = $('<div>').addClass('post');
            var titleElement = $('<h2>').text(post.title);
            var contentElement = $('<p>').text(post.content);
            postElement.append(titleElement, contentElement);
            $('#posts-container').append(postElement);
        });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading JSON file:', errorThrown);
    }
});


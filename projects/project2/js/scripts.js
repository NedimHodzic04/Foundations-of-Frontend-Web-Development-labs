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
        toastr.info("Theme changed to dark mode!");
    } else {
        
        localStorage.removeItem('theme');
        toastr.info("Theme changed to light mode!");
    }
    
});



//PHOTO GALLERY - MODAL 
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

//DATA DRIVEN CONTENT - Blog postovi
$.ajax({
    url: 'js/blogposts.json',
    dataType: 'json',
    success: function(data) {
        console.log(data); 
        $.each(data, function(index, post) {
            var postElement = $('<div>').addClass('post').attr('data-id', post.id);
            var titleElement = $('<h2>').text(post.title);
            var contentElement = $('<p>').text(post.content);
            var buttonContainer = $('<div>').addClass('button-container');
            var editButton = $('<button>').text('Edit').addClass('edit-button');
            var deleteButton = $('<button>').text('Delete').addClass('delete-button');
            
            buttonContainer.append(editButton, deleteButton);
            postElement.append(titleElement, contentElement, buttonContainer);
            $('#posts-container').append(postElement);
        });

        // Edit functionality
        $('.edit-button').on('click', function() {
            var postElement = $(this).closest('.post');
            var postId = postElement.data('id');
            var currentTitle = postElement.find('h2').text();
            var currentContent = postElement.find('p').text();

            var newTitle = prompt('Edit Title:', currentTitle);
            var newContent = prompt('Edit Content:', currentContent);

            if (newTitle !== null && newContent !== null) {
                postElement.find('h2').text(newTitle);
                postElement.find('p').text(newContent);

                console.log('Post ID', postId, 'updated to:', newTitle, newContent);
            }
        });

        // Delete functionality
        $('.delete-button').on('click', function() {
            var postElement = $(this).closest('.post');
            var postId = postElement.data('id');

            if (confirm('Are you sure you want to delete this post?')) {
                postElement.remove();

                console.log('Post ID', postId, 'deleted');
            }
        });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading JSON file:', errorThrown);
    }
});


// SCROLL issues

$(document).ready(function() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
});

$('nav a').on('click', function() {
    setTimeout(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    }, 100); 
});





//FAQ CODE

const clickDivs = document.querySelectorAll('.click-div');


    clickDivs.forEach(clickDiv => {
      const plusIcon = clickDiv.querySelector('.plus-icon');
      const minusIcon = clickDiv.querySelector('.minus-icon');
      const showDiv = clickDiv.nextElementSibling;

      clickDiv.addEventListener('click', () => {

        showDiv.classList.toggle('active');

        plusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('hidden');
      });
    });
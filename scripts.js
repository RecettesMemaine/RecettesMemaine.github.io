document.addEventListener("DOMContentLoaded", function() {
  // 1. Select all elements by class
  const btns = document.querySelectorAll('.openModalBtn');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close');

  // 2. Loop through buttons to open the correct modal
  btns.forEach((btn, i) => {
    btn.onclick = function() {
      modals[i].style.display = "block";
    };
  });

  // 3. Loop through close spans to hide the modal
  closeBtns.forEach((btn, i) => {
    btn.onclick = function() {
      modals[i].style.display = "none";
    };
  });

  // 4. Close if clicking outside the modal content
  window.onclick = function(event) {
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.querySelectorAll('.modal');
  const closeBtn = document.querySelectorAll('.close');

  openModalBtns.forEach((btn, i) => {
    btn.onclick = function() {
      modals[i].style.display = "block";
    };
  });

  closeBtns.forEach((btn, i) => {
    btn.onclick = function() {
      modals[i].style.display = "none";
    };
  });

  window.onclick = function(event) {
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };
  
});

// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('.main-header').style.background = "lightblue";
    } else {
      document.querySelector('.main-header').style.background = "#333";
    }
  });
  
  
  // Smooth Scrolling
  $('.main-nav a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        900
      );
    }
  });
// JS placeholder: Toggle active menu based on current pathname if needed
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('nav a');
  var path = location.pathname.split('/').pop();
  if (!path) path = 'index.html';
  links.forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.classList.add('active');
    }
  });

  // Handle contact form submit on static servers (prevent 501 POST)
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  alert('Contact sent! We will reply shortly.');
      try { form.reset(); } catch (err) {}
    });
  }

  // Play button scrolls to video section
  var play = document.querySelector('.play-btn');
  var videoSection = document.querySelector('.intro-video');
  if (play && videoSection) {
    play.addEventListener('click', function () {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      var video = videoSection.querySelector('video');
      try { if (video) video.play(); } catch (e) {}
    });
  }

  // Fallback for broken images
  document.querySelectorAll('img').forEach(function(img){
    img.addEventListener('error', function(){
      this.src = 'https://via.placeholder.com/800x450?text=Image+not+found';
    }, { once: true });
  });
});



const images = document.querySelectorAll('.album img');

images.forEach(img => {
  img.addEventListener('click', function() {

    if (this.classList.contains('grayscale')) {
      this.classList.remove('grayscale');
    } else {
      this.classList.add('grayscale');
    }
  });
});
images.forEach(img => {
  img.addEventListener('dbclick', function() {

    if (this.classList.contains('brightness')) {
      this.classList.remove('brightness');
    } else {
      this.classList.add('brightness');
    }
  });
});

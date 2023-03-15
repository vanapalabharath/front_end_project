function applyFilter(filter) {
  const images = document.querySelectorAll(".album img");
  images.forEach((image) => {
    image.style.filter = filter;
  });
}



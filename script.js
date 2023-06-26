// Define an array of picture URLs
const pictureUrls = [
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGlrzl7AIu-X0cabj8fgX4XD31Qh5l0bd7g&usqp=CAU',
  // Add more picture URLs as needed
];

// Function to render the gallery
function renderGallery() {
  const galleryContainer = document.querySelector('.gallery');

  pictureUrls.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    galleryContainer.appendChild(img);
  });
}

// Call the renderGallery function when the page loads
window.addEventListener('load', renderGallery);

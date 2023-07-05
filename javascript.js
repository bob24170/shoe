// Define an array of picture URLs
const pictureUrls = [
  'https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_1280.png',
  '1.jpg',
  '1.jpg',
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


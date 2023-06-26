// Define an array of picture URLs
const pictureUrls = [
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGlrzl7AIu-X0cabj8fgX4XD31Qh5l0bd7g&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6lpAlqJi8rGvsdBsiDCcoiXYjBPGzh_fqA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mf3i4nYZ2EJVTnxYf9n3U8S-PuUjdeVemB0IUyaeeUTcGNqDmLqdgIZ4p0ybHqoxWfs&usqp=CAU'
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

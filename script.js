// Define an array of picture URLs
const pictureUrls = [
  'Hfe5ce496290b4a3ba34fad284d42b3a7q.jpg',
  'Hfe5ce496290b4a3ba34fad284d42b3a7q.jpg_720x720q50.jpg',
  'Hbc1ca298dfc44040b1fbcd64a8a6ffe30.jpg_720x720q50.jpg',
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

// Function to add a new comment
function addComment() {
  const nameInput = document.getElementById('nameInput');
  const commentInput = document.getElementById('commentInput');
  const commentList = document.querySelector('.comment-list');

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name === '' || comment === '') {
    alert('Please enter both your name and a comment.');
    return;
  }

  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment');

  const authorElement = document.createElement('div');
  authorElement.classList.add('author');
  authorElement.textContent = name;

  const timestampElement = document.createElement('div');
  timestampElement.classList.add('timestamp');
  timestampElement.textContent = new Date().toLocaleString();

  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.textContent = comment;

  commentContainer.appendChild(authorElement);
  commentContainer.appendChild(timestampElement

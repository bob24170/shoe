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

  const name = nameInput.value;
  const comment = commentInput.value;

  if (name.trim() === '' || comment.trim() === '') {
    alert('Please enter both your name and a comment.');
    return;
  }

  const commentList = document.querySelector('.comment-list');

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
  commentContainer.appendChild(timestampElement);
  commentContainer.appendChild(contentElement);

  commentList.appendChild(commentContainer);

  // Clear the input fields
  nameInput.value = '';
  commentInput.value = '';
}

// Call the renderGallery function when the page loads
window.addEventListener('load', renderGallery);

// Add event listener to submit button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', addComment);

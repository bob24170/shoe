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

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name === '' || comment === '') {
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

  // Save comment to local storage
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  const newComment = { name, comment };
  comments.push(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));

  // Clear the input fields
  nameInput.value = '';
  commentInput.value = '';
}

// Function to load comments from local storage
function loadComments() {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  const commentList = document.querySelector('.comment-list');

  comments.forEach((comment) => {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');

    const authorElement = document.createElement('div');
    authorElement.classList.add('author');
    authorElement.textContent = comment.name;

    const timestampElement = document.createElement('div');
    timestampElement.classList.add('timestamp');
    timestampElement.textContent = new Date().toLocaleString();

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.textContent = comment.comment;

    commentContainer.appendChild(authorElement);
    commentContainer.appendChild(timestampElement);
    commentContainer.appendChild(contentElement);

    commentList.appendChild(commentContainer);
  });
}

// Call the renderGallery function when the page loads
window.addEventListener('DOMContentLoaded', renderGallery);

// Load comments from local storage
window.addEventListener('DOMContentLoaded', loadComments);

// Add event listener to submit button
window.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', addComment);
});

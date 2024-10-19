document.querySelector('button').addEventListener('click', () => {
    alert('Thank you for clicking the button!');
  });

// Initialize the like count
let likeCount = 0;

// Get button and count elements
const likeButton = document.getElementById('likeButton');
const likeCountDisplay = document.getElementById('likeCount');

// Add event listener for click
likeButton.addEventListener('click', function() {
    // Increment the like count
    likeCount++;
    
    // Update the displayed count
    likeCountDisplay.textContent = likeCount;
});

// Initialize the like count
let dislikeCount = 0;

// Get button and count elements
const dislikeButton = document.getElementById('dislikeButton');
const dislikeCountDisplay = document.getElementById('dislikeCount');

// Add event listener for click
dislikeButton.addEventListener('click', function() {
    // Increment the like count
    dislikeCount++;
    
    // Update the displayed count
    dislikeCountDisplay.textContent = dislikeCount;
});
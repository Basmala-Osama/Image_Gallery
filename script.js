let currentIndex = 0;
let images = [];


function openLightbox(imgElement) {
  // Get only visible images (not hidden)
  visibleImages = Array.from(document.querySelectorAll('.image-card:not(.hidden) img'));
  currentIndex = visibleImages.indexOf(imgElement);

  document.getElementById('lightbox-img').src = imgElement.src;
  document.getElementById('lightbox').style.display = 'block';
}


function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = visibleImages.length - 1;
  if (currentIndex >= visibleImages.length) currentIndex = 0;

  document.getElementById('lightbox-img').src = visibleImages[currentIndex].src;
}


function filterImages(category) {
  const allCards = document.querySelectorAll('.image-card');
  const allTabs = document.querySelectorAll('.category-menu li');

  // Highlight active tab
  allTabs.forEach(tab => tab.classList.remove('active'));
allTabs.forEach(tab => {
  if (tab.dataset.category === category) {
    tab.classList.add('active');
  }
});


  // Filter images and reflow layout
  allCards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}



// Smooth Scroll for Navigation

// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const closeModalBtn = document.querySelector(".close");

// Function to open the modal with the clicked painting
function showModal(imageSrc, title) {
    modal.style.display = "flex";
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Assign modal open function to each painting
document.querySelectorAll(".painting").forEach((painting) => {
    painting.addEventListener("click", function () {
        const imgElement = this.querySelector("img");
        const imgSrc = imgElement.src;
        const title = this.querySelector("p").textContent;
        showModal(imgSrc, title);
    });
});

document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(event.target.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  // Show Popup
  function showPopup(imageSrc) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
  
    // Set the popup image source
    popupImg.src = imageSrc;
  
    // Display the popup
    popup.style.display = 'flex';
  
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
  }
  
  // Close Popup
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
  
  // Close Popup on Outside Click
  document.getElementById('popup').addEventListener('click', (event) => {
    if (event.target.id === 'popup') {
      closePopup();
    }
  });
  
  // Touch-Friendly Enhancements for Mobile
  document.addEventListener('touchstart', function () {}, true); // Enables touch events in certain browsers

  // Function to open the modal and display the image with details
function showPopup(imageSrc, description) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  var modalText = document.getElementById("modalText");

  modal.style.display = "flex";
  modalImage.src = imageSrc;
  modalText.textContent = description;
}

// Function to close the modal
function closePopup() {
  document.getElementById("imageModal").style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closePopup();
  }
};

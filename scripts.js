const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
    }))

// Homepage functions - Danny

var images = ["images/Skater04.jpg", "images/Skater05.jpg", "images/how_to_join.jpg"];
var currentIndex = 0;
var slideshowImage = document.getElementById("slideshow-image");

function slideshow() {
    slideshowImage.style.opacity = 0; // Set opacity to 0 to start the fade out animation
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    setTimeout(function() {
      slideshowImage.src = images[currentIndex]; // Change the image source
      slideshowImage.style.opacity = 1; // Set opacity to 1 to start the fade in animation
    }, 1000); // Wait 1 second before changing the image and starting the fade in animation
  }
  
  slideshow(); // Start the slideshow
  setInterval(slideshow, 5000); // Change the image every 5 seconds

  window.addEventListener('load', function() {
      var fadingText = document.getElementById('homepage-intro');
      fadingText.style.opacity = 1; // Set opacity to 1 to start the fade in animation
    });

// End Homepage Functions

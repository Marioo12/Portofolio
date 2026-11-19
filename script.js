const header = document.querySelector('.header'); // Selects the header element from the DOM and assigns it to the variable 'header' for later use

// The updateHeader function checks the scroll position of the window and adds or removes the 'scrolled' class from the header element based on whether the user has scrolled down more than 50 pixels. This allows for dynamic styling of the header as the user scrolls through the page.
function updateHeader() {
  if (window.scrollY > 50) {
    // Checks if the user has scrolled down more than 50 pixels
    header.classList.add('scrolled'); // Adds the 'scrolled' class to the header when the user scrolls down
  } else {
    header.classList.remove('scrolled'); // Removes the 'scrolled' class when the user scrolls back to the top
  }
}

// The updateHeader function is called whenever the user scrolls, and it checks the scroll position to determine whether to add or remove the 'scrolled' class from the header. This allows for dynamic styling of the header based on the user's scroll position.
window.addEventListener('scroll', updateHeader); // Attaches the updateHeader function to the window's scroll event
updateHeader(); // Calls the updateHeader function initially to set the correct header state on page load

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealItems.forEach((item) => observer.observe(item));

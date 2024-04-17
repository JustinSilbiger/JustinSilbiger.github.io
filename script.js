document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.purple, .cyan, .yellow');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target); // trigger repitition stop
          }
      });
  }, {
      threshold: 0.5 // animation trigger threshold
  });

  sections.forEach(section => {
      observer.observe(section);
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.subtext');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('subanimated');
                observer.unobserve(entry.target); // trigger repetition stop
            }
        });
    }, {
        threshold: 1, // Adjust threshold for smoother behavior
        rootMargin: '0px' // Optionally adjust root margin if needed
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});




// JavaScript for handling the modal window
var modal = document.getElementById("orderModal");
var btn = document.getElementById("viewBtn"); 
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

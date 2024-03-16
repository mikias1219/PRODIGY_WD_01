// Change color of navigation menu when scrolled
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Change color of menu items on hover
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('mouseover', function() {
      this.style.color = 'yellow';
  });
  link.addEventListener('mouseout', function() {
      this.style.color = '';
  });
});

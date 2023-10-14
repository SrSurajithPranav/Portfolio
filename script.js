const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    const content = navItem.nextElementSibling;
    content.style.display = 'block';
  });
});

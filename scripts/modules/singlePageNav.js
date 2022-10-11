const singlePageNav = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const page = document.querySelector(
          `#${link.getAttribute('data-trigger')}`,
        );
    
        // remove current class from the one who have it.
        document.querySelector('.current').classList.remove('current');
        // add the current class to the current section
        page.classList.add('current');
      });
    });
}

export default singlePageNav;
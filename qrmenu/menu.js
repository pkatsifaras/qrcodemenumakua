document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;
    const links = navbar.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const targetPosition = targetSection.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

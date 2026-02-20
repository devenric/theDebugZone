console.log('Script de navegación cargado');

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.elemento-nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        console.log('el link es ' + linkHref);
        // Verificamos que exista y que no sea un enlace vacío (#)
        if (linkHref && linkHref !== '#') {
            
            // Condición 1: Coincidencia normal (ej: /D20Gate.html contiene D20Gate.html)
            const coincidenciaNormal = currentPath.includes(linkHref);
            
            // Condición 2: Es la página principal (la ruta acaba en / y el link es index.html)
            const esPaginaRaiz = currentPath.endsWith('/') && linkHref === 'index.html';

            // Si se cumple CUALQUIERA de las dos, iluminamos el botón
            if (coincidenciaNormal || esPaginaRaiz) {
                link.classList.add("link-activo");
            }
        }
    });
});
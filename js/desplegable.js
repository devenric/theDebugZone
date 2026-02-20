const boton = document.getElementById('btnMostrar');
    const texto = document.getElementById('textoPrueba');

    boton.addEventListener('click', () => {
        // Si está oculto lo muestra, si se ve lo oculta
        if (texto.style.display === 'block') {
            texto.style.display = 'none';
            boton.textContent = 'Lanzar Iniciativa (Ver info)';
        } else {
            texto.style.display = 'block';
            boton.textContent = 'Cerrar pergamino';
        }
    });
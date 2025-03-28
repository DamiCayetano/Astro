document.getElementById('registro').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido );
    localStorage.setItem('email', email);
    localStorage.setItem('contraseña', contraseña);

    const modalMensaje = `¡Registro completado ${nombre}!`;
    document.getElementById('modalMensaje').innerText = modalMensaje;
    document.getElementById('modal').classList.add('show');

});

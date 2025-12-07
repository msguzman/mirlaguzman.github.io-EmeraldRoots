document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    const thankMessage = document.getElementById('thankMessage');

    donationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita recargar la página

        // Limpiar el formulario
        donationForm.reset();

        // Mostrar mensaje de agradecimiento
        thankMessage.style.display = 'block';
    });
});

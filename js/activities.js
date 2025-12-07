// donation.js

// Espera a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    const donationForm = document.getElementById('donationForm');

    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que se recargue la página

            const name = document.getElementById('donorName').value.trim();
            const email = document.getElementById('donorEmail').value.trim();
            const amount = document.getElementById('donationAmount').value.trim();

            if (!name || !email || !amount || amount <= 0) {
                alert("Por favor completa todos los campos correctamente.");
                return;
            }

            alert(`¡Gracias ${name} por tu donación de $${amount}!`);

            // Cierra el modal
            const modalEl = document.getElementById('donationModal');
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            modalInstance.hide();

            // Limpia el formulario
            donationForm.reset();
        });
    }

});

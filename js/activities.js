// donation.js

document.addEventListener('DOMContentLoaded', function() {

    const donationForm = document.getElementById('donationForm');

    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('donorName').value.trim();
            const email = document.getElementById('donorEmail').value.trim();
            const amount = document.getElementById('donationAmount').value.trim();

            if (!name || !email || !amount || amount <= 0) {
                alert("Please fill in all fields correctly.");
                return;
            }

            // Cierra el modal
            const modalEl = document.getElementById('donationModal');
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            modalInstance.hide();

            // Limpia el formulario
            donationForm.reset();

            // Mensaje simple de agradecimiento
            alert("Thank you for your donation!");
        });
    }

});

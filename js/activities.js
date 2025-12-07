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

            // Mostrar mensaje de agradecimiento en la página
            const thankMessage = document.createElement('div');
            thankMessage.textContent = "Thank you for your donation!";
            thankMessage.style.position = "fixed";
            thankMessage.style.top = "20px";
            thankMessage.style.right = "20px";
            thankMessage.style.backgroundColor = "#28a745";
            thankMessage.style.color = "white";
            thankMessage.style.padding = "15px 25px";
            thankMessage.style.borderRadius = "8px";
            thankMessage.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            thankMessage.style.zIndex = "1055";
            thankMessage.style.fontWeight = "600";
            document.body.appendChild(thankMessage);

            // Desaparece después de 4 segundos
            setTimeout(() => {
                thankMessage.remove();
            }, 4000);

        });
    }

});

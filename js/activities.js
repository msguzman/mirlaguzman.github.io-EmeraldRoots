document.addEventListener('DOMContentLoaded', function() {
    const showFormBtn = document.getElementById('showDonationForm');
    const donationSection = document.getElementById('donationFormSection');
    const donationForm = document.getElementById('donationForm');
    const thankMessage = document.getElementById('thankMessage');

    // Mostrar formulario al hacer click en "Get Involved"
    showFormBtn.addEventListener('click', function() {
        donationSection.style.display = 'block';
        donationSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Manejar envío del formulario
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Validar campos (opcional)
        const name = document.getElementById('donorName').value.trim();
        const email = document.getElementById('donorEmail').value.trim();
        const amount = document.getElementById('donationAmount').value.trim();

        if (!name || !email || !amount || amount <= 0) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // Limpiar formulario
        donationForm.reset();

        // Mostrar mensaje de agradecimiento
        thankMessage.style.display = 'block';
        thankMessage.scrollIntoView({ behavior: 'smooth' });
    });
});

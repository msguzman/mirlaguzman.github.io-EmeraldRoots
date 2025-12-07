document.addEventListener('DOMContentLoaded', function() {
    const donateBtn = document.getElementById('donateBtn');
    const thankMessage = document.getElementById('thankMessage');

    donateBtn.addEventListener('click', function() {
        // Opcional: validar campos si quieres
        const name = document.getElementById('donorName').value.trim();
        const email = document.getElementById('donorEmail').value.trim();
        const amount = document.getElementById('donationAmount').value.trim();

        if (!name || !email || !amount || amount <= 0) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // Limpiar formulario
        document.getElementById('donationForm').reset();

        // Mostrar mensaje de agradecimiento
        thankMessage.style.display = "block";
        thankMessage.scrollIntoView({ behavior: 'smooth' });
    });
});

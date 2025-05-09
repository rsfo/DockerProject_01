let countdown = 15;
const countdownElement = document.querySelector('text');
const progressCircle = document.getElementById('progressCircle');
const totalLength = 314.159;

const interval = setInterval(function () {
    countdown -= 1;
    countdownElement.textContent = countdown;
    const offset = totalLength - (countdown / 15) * totalLength;
    progressCircle.style.strokeDashoffset = offset;

    if (countdown <= 0) {
        clearInterval(interval);
        try {
            window.close(); // Tenta fechar a aba
            if (!window.closed) {
                throw new Error('Não foi possível fechar a aba.');
            }
        } catch (e) {
            window.location.href = 'http://localhost:8501'; // Redireciona caso não feche            
        }
    }
}, 1000);
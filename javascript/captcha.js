document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    grecaptcha.ready(function() {
        grecaptcha.execute('6LcUWjMqAAAAAPaIV31IjoyyZDVcJvA1XUKUc0zf', {action: 'submit'}).then(function(token) {
            // Adiciona o token ao campo oculto
            document.getElementById('recaptcha-token').value = token;

            // Agora pode submeter o formulário
            document.getElementById('contact-form').submit();
        });
    });
});
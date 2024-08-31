document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    grecaptcha.ready(function() {
        grecaptcha.execute('6LcUWjMqAAAAAPaIV31IjoyyZDVcJvA1XUKUc0zf', {action: 'submit'}).then(function(token) {
            document.getElementById('recaptcha-token').value = token;

            document.getElementById('contact-form').submit();
        });
    });
});
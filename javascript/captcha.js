document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            grecaptcha.ready(function() {
                grecaptcha.execute('6LcUWjMqAAAAAPaIV31IjoyyZDVcJvA1XUKUc0zf', {action: 'submit'}).then(function(token) {
                    document.getElementById('recaptcha-token').value = token;
                    form.submit();
                });
            });
        });
    }
});
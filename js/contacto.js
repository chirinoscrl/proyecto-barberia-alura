function validatePhoneNumber(input_str) {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
}

function validateForm(event) {
    const phone = document.getElementById('telefono').value;

    if (!validatePhoneNumber(phone)) {
        document.getElementById('phone_error').classList.remove('hidden');
    } else {
        document.getElementById('phone_error').classList.add('hidden');
        Swal.fire(
            'Gracias!',
            'Tu información fue enviada!',
            'success'
        )
        setTimeout(() => {
            document.getElementById('form-contact').reset();
        }, 1000);
    }
    event.preventDefault();
}

document.getElementById('form-contact').addEventListener('submit', validateForm);

function showPassword() {
  const eyeIcon = document.querySelector('.js-eye');
  const eyeSlash = document.querySelector('.js-eye-slash');
  const passwordInput = document.querySelector('.js-password-input');

  if (passwordInput.type === 'password') {
    eyeIcon.classList.remove('is-eye--desabled');
    eyeSlash.classList.add('is-eye-slash--desabled');
    passwordInput.type = 'text';

  } else {
    eyeIcon.classList.add('is-eye--desabled');
    eyeSlash.classList.remove('is-eye--desabled');
    passwordInput.type = 'password';
  }
}

const buttonLogin = document
  .querySelector('.c-button-login')
  .addEventListener('click', event => {
    event.preventDefault()
    alert('Login efetuado com sucesso')
  })

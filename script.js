const validLogin = document.getElementById('login');
const validEmail = document.getElementById('email');
const validPassword = document.getElementById('password');

validLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const email = validEmail.value;
  const password = validPassword.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
});

const submitCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

submitCheck.addEventListener('change', () => { submitButton.disabled = !submitCheck.checked; });

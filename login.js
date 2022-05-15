const userName = document.getElementById('userName');
const pass = document.getElementById('password');
const frmLogin = document.getElementById('frm-register');

frmLogin.addEventListener('submit', LoginUser);

function LoginUser(event) {
  // Prevenir los eventos precargados
  event.preventDefault();
  const getLocal = localStorage.getItem("user");
  const validateUser = JSON.parse(getLocal);    
  // Validar que los campos no estén vacíos
  if (userName.value === "" || password.value === "") {
    alert("Por favor llene todos los campos");
  }
  // Validar que el usuario exista
  else if (!validateUser.find(user => user.user === userName.value)) {
    alert("El usuario no existe");
  }
  // Validar que la contraseña coincida
  else if (
    validateUser.find(user => user.user === userName.value).pass !== pass.value) {
      alert("La contraseña no coincide");
    }
  else {
    alert("Usuario logueado con éxito");
    // Ir a otra página desde JavaScript
    window.location.href = "/Pages/welcome.html";
  }      
}
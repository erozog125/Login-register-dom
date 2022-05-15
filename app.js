const frmLogin = document.getElementById("frm-register");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const userRegistered = [];
let id = 0;

frmLogin.addEventListener("submit", RegisterUser);

// Registrar Usuario
function RegisterUser(event) {
  // Prevenir los eventos precargados  
  event.preventDefault();
  // agregar automáticamente un ID
  id++;
  // Crear usuario objeto
  const user = {
    id: id,
    nameFull: fullName.value,
    user: userName.value,
    pass: password.value,
    confPassword: confirmPassword.value
  };
  // Validar que los campos no estén vacíos
  if (
    fullName.value === "" ||
    userName.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
    ) {
      alert("Por favor llene todos los campos");
    }
    // Validar que las contraseñas coincidan
  else if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden");
  }
  // Validar que el usuario no exista
  else if (userRegistered.find(user => user.user === userName.value)) {
    alert("El usuario ya existe");
  }
  // Validar que el usuario no exista
  else {
    // Agregar usuario
    userRegistered.push(user);
    // guardar array en localStorage
    localStorage.setItem("user",JSON.stringify(userRegistered));              
    alert("Usuario registrado con éxito");
    // Limpiar campos
    fullName.value = "";
    userName.value = "";
    password.value = "";
    confirmPassword.value = "";    
  }
}








const generatePassword = () => {
  const lengthNum = 12;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ09876543231!@#$%^&*";

  let password = '';
  for (let i = 0; i < lengthNum; i++)
  {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById('password').textContent = password;
  checkStrength(password);

}
const checkStrength = (password) => {
  let strength = 0;

  if (password.length >= 8) {
    strength++;  
  }
  if (/[A-Z]/.test(password)) {
    strength++;
  }
  if (/[0-9]/.test(password)) {
    strength++;
  }

  if (/[!@#$%^&*]/.test(password)) {
    strength++;
  }

  const strengthText = ['Weak', 'Medium', 'Strong', 'Very Strong'][strength - 1] ||
    'Weak';
  document.getElementById('strength').textContent = `Strength: ${strengthText}`;
  
  changeBgColor(strength);
   
 }

const changeBgColor = (strength) => {
  const colors = ['#ff4d4d', '#ffa500', '#4682b4', '#32cd32'];
  document.body.style.backgroundColor = colors[strength - 1] || '#ff4d4d';
 }
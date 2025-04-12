const generatePassword = () => {
  const lengthpass = document.getElementById('lengthpass').value;
  console.log(lengthpass);
  const charset = "zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP!@#$%^&*()_+=-0987654321";

  let randompass = '';

  for (let i = 0; i < lengthpass; i++){
    const randomIndex = Math.round(Math.random() * charset.length);

    const randomChar = charset[randomIndex];
    randompass += randomChar;
  }


  document.getElementById('showpass').innerText = randompass;
  

}
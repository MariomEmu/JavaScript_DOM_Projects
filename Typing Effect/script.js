
const text = "welcome to my website!";
const messageBox = document.getElementById('message');

let index = 0;
let isDeleting = false;



const typeEffect = () => {
  if (!isDeleting && index <= text.length) {
    messageBox.textContent = text.substring(0,index);
    index++;
  }
  else if (isDeleting && index >= 0) {
    messageBox.textContent = text.substring(0, index);
    index--;
  }

  if (index > text.length) {
    isDeleting = true;
  }
  else if(index < 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect,100);
}
typeEffect();



for (let i = 0; i < text.length; i++)
{
  setTimeout(() => {
    messageBox.textContent += text[i];
  }, i * 100);
}
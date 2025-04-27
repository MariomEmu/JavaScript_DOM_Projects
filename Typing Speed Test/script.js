document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    "A journey of a thousand miles begin with a single step",
    "All that gillters is not gold",
    "The quick brown fox jumps over the lazy dog",
    "To be or not to be, that is the question",
    "The only thing we have to fear is fear itself"
  ];
   
  const quoteDisply = document.getElementById('quote');
  const inputBox = document.getElementById('input-box');
  const startButton = document.getElementById('start-button');

  const resultDisplay = document.getElementById('result-div');

  let startTime;
  let currentQuote;
  
  startButton.addEventListener('click', startTest);
  inputBox.addEventListener('input',checkInput);



  function startTest() {
    const randomIndex = (Math.floor(Math.random() * quotes.length));

   currentQuote = quotes[randomIndex];
    quoteDisply.textContent = currentQuote;
    inputBox.value = '';
    inputBox.removeAttribute('disabled');
    inputBox.focus();
    resultDisplay.textContent = '';
    startTime = new Date().getTime();
    


  }

  function checkInput() {
    const typeText = inputBox.value;
    

    if (typeText === currentQuote) {
      const endTime = new Date().getTime();
        const timeTaken =  (endTime - startTime) / 1000;
      const wordPerMinute = typeText.split(' ').length / timeTaken;
      inputBox.setAttribute('disabled', 'true');
      resultDisplay.textContent = `You typed at ${wordPerMinute.toFixed(2)} words per minute.`;

    }
  }




});
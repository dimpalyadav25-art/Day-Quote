
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "What we think, we become.", author: "Buddha" },
    { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { text: "Code is read far more often than it is written.", author: "Claude (added for this project)" },
    { text: "A bug fixed without understanding it is a bug postponed, not solved.", author: "Claude (added for this project)" },
    { text: "The console.log you place today is the clue you'll thank yourself for tomorrow.", author: "Claude (added for this project)" },
    { text: "Every expert was once a beginner who didn't quit on day three.", author: "Claude (added for this project)" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "The best error message is the one that never needs to be shown.", author: "Thomas Fuchs" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Small, daily practice beats one heroic weekend.", author: "Claude (added for this project)" }
  ];

  
  const quoteTextEl   = document.getElementById('quote-text');
  const quoteAuthorEl = document.getElementById('quote-author');
  const cardNoEl      = document.getElementById('card-no');
  const button        = document.getElementById('new-quote-btn');

  let lastIndex = -1; 

 
  function getRandomQuote() {
    let index = Math.floor(Math.random() * quotes.length);

  
    if (index === lastIndex) {
      index = Math.floor(Math.random() * quotes.length);
    }
    lastIndex = index;
    return quotes[index];
  }

 
  function showNewQuote() {
    const card = document.getElementById('card');
    card.classList.add('fade');

    setTimeout(() => {
      const quote = getRandomQuote();

      
      quoteTextEl.textContent = quote.text;
      quoteAuthorEl.textContent = quote.author;
      cardNoEl.textContent = `No. ${String(lastIndex + 1).padStart(2, '0')}`;

      card.classList.remove('fade');
    }, 180);
  }

  
  button.addEventListener('click', showNewQuote);

  
  showNewQuote();


const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitte')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = [];

// new quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // Check Author
    if (!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    // Check Quote Length
    if (quote.text > 50){
        authorText.classList.add('long-quote');
    }else{
        authorText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

//quotes function
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
      // catch error  
    }
}

getQuotes();
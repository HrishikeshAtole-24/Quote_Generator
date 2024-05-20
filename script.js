document.addEventListener('DOMContentLoaded', () => {
    const quoteForm = document.getElementById('quoteForm');
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');
    const copyButton = document.getElementById('copyButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let quotes = [];
    let currentIndex = 0;

    quoteForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const topic = document.getElementById('topic').value;

        try {
            const response = await fetch(`https://api.quotable.io/quotes/random?tags=${encodeURIComponent(topic)}&limit=5`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            quotes = await response.json();

            if (quotes.length) {
                currentIndex = 0;
                displayQuote();
                quoteContainer.classList.remove('hidden');
                updateButtons();
            } else {
                quoteText.textContent = 'No quotes found for this topic.';
                quoteContainer.classList.remove('hidden');
            }
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'Failed to fetch quotes. Please try again later.';
            quoteContainer.classList.remove('hidden');
        }
    });

    function displayQuote() {
        const quote = quotes[currentIndex];
        quoteText.textContent = `"${quote.content}" - ${quote.author}`;
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === quotes.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            displayQuote();
            updateButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < quotes.length - 1) {
            currentIndex++;
            displayQuote();
            updateButtons();
        }
    });

    copyButton.addEventListener('click', () => {
        const text = quoteText.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Quote copied to clipboard');
        }).catch((error) => {
            console.error('Could not copy text:', error);
        });
    });
});

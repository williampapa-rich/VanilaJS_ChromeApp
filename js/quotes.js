const quotes = [
    
    {
        quotes : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela"
    },
    
    {
        quotes : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney"
    },
    
    {
        quotes : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author : "Steve Jobs"
    },
    
    {
        quotes : "The future belongs to those who believe in the beauty of their dreams.",
        author : "Eleanor Roosevelt"
    },
     
    {
        quotes : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author : "Oprah Winfrey"
    },

    {
        quotes : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author : "James Cameron"
    },

    {
        quotes : "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        author : "John Lennon"
    },

    {
        quotes : "Well done is better than well said.",
        author : "Benjamin Franklin"
    },

    {
        quotes : "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author : "Helen Keller"
    },

    {
        quotes : "It is during our darkest moments that we must focus to see the light.",
        author : "Aristotle"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
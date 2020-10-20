const quotes = [
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: '-Marilyn Monroe'
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: '-Oscar Wilde'
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: '-Albert Einstein'
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: '-Bernard M. Baruch'
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: '-Marcus Tullius Cicero'
    },
    {
        quote: "You've gotta dance like there's nobody watching, / Love like you'll never be hurt, / Sing like there's nobody listening, / And live like it's heaven on earth.",
        author: '-William W. Purkey'
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: '-Dr. Seuss'
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: '-Mae West'
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: '-Mahatma Gandhi'
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: '-Robert Frost'
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: '-J.K. Rowling'
    }
];



//function that takes the data, returns one string (either quote or author)
const quoteToDisplay = (index) => quotes
    .map(x => x.quote)
    .reduce((a, x, i) => {
        if(i === index) {
            a = x;
        }
        return a;
    }, ''
);
const authorToDisplay = (index) => quotes
    .map(x => x.author)
    .reduce((a, x, i) => {
        if(i === index) {
            a = x;
        }
        return a;
    }, ''
); 

//function that takes in quote length (quoteToDisplay.split(' ').length), and returns the total amount of time it should be displayed (150 words per minute) 
let totalDisplayTime = (str, msPerWord = 400) => str.split(' ').length * msPerWord; // msPerWord = 400 is assuming the user can read 150 words per minute.


function textFadeAnimation(id, fadeInTime, waitTime, fadeOutTime) {
    let opacity = 0;
    let fadeIn = () => {
        if(opacity < 1) {
            opacity += (4000 / fadeInTime) / 100;
            setTimeout(() => fadeIn(), 40); // 1000 / 24 = 40 -- 24fps = 40ms
        } 
        // console.log(opacity);
        document.getElementById(id).style.opacity = opacity;
    }
    
    let fadeOut = () => {
        if(opacity > 0) {
            opacity -= (4000 / fadeOutTime) / 100;
            setTimeout(() => fadeOut(), 40);
        } 
        // console.log(opacity);
        document.getElementById(id).style.opacity = opacity;
    }




    let wait = () => {
        // console.log('waiting');
        setTimeout(() => fadeOut(), waitTime);
    }




    fadeIn();
    setTimeout(() => wait(), fadeInTime);
}
// console.log(totalDisplayTime(quoteToDisplay(0)));

// function to keep track of "global index" that will be used to determin parameters for authorToDisplay() and quoteToDisplay()





// need a function that fades in (x)ms, displays the text for (n)ms, fades out (x)ms
// if I specify the element and what is being displayed, I can reuse this for the author text too

function getFadingQuotes() {
    let i = 0;
    let displayTime = 0;
    let fadeIn = 0;
    let fadeOut = 0;
    function render() {
        setTimeout(
            () => { //all of the functions in here are executed all at once every (n)ms 
                fadeIn = 1000;
                fadeOut = 1000;
                displayTime = totalDisplayTime(quoteToDisplay(i));
                document.getElementById('quote').innerHTML = quoteToDisplay(i);
                document.getElementById('author').innerHTML = authorToDisplay(i);
                
                /*id of element to be changed (str), ms to fade in, ms showing @ full opacity, ms to fade out */
                textFadeAnimation('quote', fadeIn, displayTime, fadeOut); //textFadeAnimation(fadeInTime, totalDisplayTime(quoteToDisplay(i)) - (fadeInTime + fadeOutTime), fadeOutTime) 
                textFadeAnimation('author', fadeIn, displayTime, fadeOut);
                
                
                if(i === quotes.length - 1) {
                    i = 0;
                }
                else {
                    i++;
                }
                
                render();
                
            }, displayTime + (fadeIn + fadeOut)
        );
        console.log(displayTime);
    }
    render();
}

getFadingQuotes();



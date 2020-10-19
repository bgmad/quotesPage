const quotes = [
    {
        quote: 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
        author: '-Marilyn Monroe'
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        author: '-Oscar Wilde'
    },
    {
        quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
        author: '-Albert Einstein'
    },
    {
        quote: 'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.',
        author: '-Bernard M. Baruch'
    },
    {
        quote: 'ebirkx nthaonth enatohu nthaoeun n natoehu ne e aneth ne ntheuanre',
        author: '5'
    },
    {
        quote: 'edaoe antoent enteth nateh nate nt antethen nath er',
        author: '6'
    },
    {
        quote: 'xaoeaeu nateh nnan na te nthkan tenbmentg ntanthe cna bnateh ',
        author: '7'
    },
    {
        quote: 'aexkax anthe banthe banthe rcanthe tnhanthenth ',
        author: '8'
    },
    {
        quote: 'aekeiaID natoehu ntb ntaheon unaotehunt bnathe untha ounbnth',
        author: '9'
    },
    {
        quote: 'eiakf ntaoheu nbnath euntha bunotahe u',
        author: '10'
    },
    {
        quote: 'hbqux atnhe banteh anteuhnatoheu nntaoheuntaoeh unthn aoenuth natubnetu bjkcrnat ntehun nkbnacg.nb kanbnt natheun',
        author: '11'
    }
];

// class Display {
//     constructor (_q, _id, _key) { // data set to display, id (str) that will be changing, key (str) that will be displayed in that id
//         this.arr = _q;
//         this.key = _key;
//         this.element = document.getElementById(_id);
//         this.i = 0;
//         this.opacity = 0;
//     }
//     next(){
//         if (this.i >= this.arr.length - 1) {
//             this.i = 0;
//         } else {
//             this.i++;
//         }
//     }
//     fadeIn() {
//         if(this.opacity < 1) {
//             this.opacity += .1;
//             setTimeout(() => this.fadeIn(), 50);
//         }
//         this.element.style.opacity = this.opacity;
//     }
//     fadeOut() {
//         console.log('fadeout');
//         if(this.opacity >= 1) {
//             this.opacity -= .1;
//             setTimeout(() => this.fadeOut(), 50);
//         }
//         this.opacity = 0;
//         this.element.style.opacity = this.opacity;
//     }
//     getFadingQuotes() {
//         // this.opacity = 0;
//         this.fadeIn();
//         // this.opacity = 1;
//         console.log(this.opacity);
//         this.fadeOut();
//         // this.opacity = 0;
//         this.next();
//         this.element.innerHTML = this.arr[this.i][this.key];
//         console.log(this.i);    
//     }
// }

// let quote = new Display(quotes, 'quote', 'quote');
// let author = new Display(quotes, 'author', 'author');

// setInterval(
//     function () {
//         quote.getFadingQuotes();
//         author.getFadingQuotes();
//     }, 5000
// );



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



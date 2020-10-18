const quotes = [
    {
        quote: 'aoenuths',
        author: '1'
    },
    {
        quote: 'etuh',
        author: '2'
    },
    {
        quote: 'ebk',
        author: '3'
    },
    {
        quote: 'asdfn',
        author: '4'
    },
    {
        quote: 'ebirkx',
        author: '5'
    },
    {
        quote: 'edaoe',
        author: '6'
    },
    {
        quote: 'xaoeaeu',
        author: '7'
    },
    {
        quote: 'aexkax',
        author: '8'
    },
    {
        quote: 'aekeiaID',
        author: '9'
    },
    {
        quote: 'eiakf',
        author: '10'
    },
    {
        quote: 'hbqux',
        author: '11'
    }
];

class Display {
    constructor (_q, _id, _key) { // data set to display, id (str) that will be changing, key (str) that will be displayed in that id
        this.arr = _q;
        this.key = _key;
        this.element = document.getElementById(_id);
        this.i = 0;
    }
    next(){
        if (this.i >= this.arr.length - 1) {
            this.i = 0;
        } else {
            this.i++;
        }
    }
    render() {
        this.next();
        this.element.innerHTML = this.arr[this.i][this.key];
        console.log(this.i);    
    }
}

let quote = new Display(quotes, 'quote', 'quote');
let author = new Display(quotes, 'author', 'author');

setInterval(
    function () {
        quote.render();
        author.render();
    }, 2000
);

// function getQuote(quotes) {
//     let quoteElement = document.getElementById('quote');
//     let i = 0;
//     function nextQuote() {
//         i++;
//     }
//     function indexContain(){
//         if (i >= quotes.length - 1) {
//             i = 0;
//         } else {
//             nextQuote();
//         }
//     }

//     return function render() {
//         indexContain();
//         quoteElement.innerHTML = quotes[i].quote;
//         console.log(i);    
//     }
// }




// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"You got this!"`,
    person: `"Someone1"`
}, {
    quote: `"You are amazing!"`,
    person: `"Someone2"`
}, {
    quote: `"Yay!"`,
    person: `"Someone3"`
}, {
    quote: `"Wow!"`,
    person: `"Someone4"`
}];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = "-"+JSON.parse(quotes[random].person);
})
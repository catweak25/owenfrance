let btn=document.getElementById('btn'); 
let output = document.getElementById('output');
let quotes =
[
    '"loving you once is not enough,i promise to look for you in the next life"',
    '"love me hard, like how i will love you"',
    '"itlog tang ina"',
    
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

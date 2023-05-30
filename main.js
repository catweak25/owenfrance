let btn=document.getElementById('btn'); 
let output = document.getElementById('output');
let quotes =
[
    '"titeh titeh titeh"',
    '"itlog basss itlogbass'
];
btn.addEventListener('click',function(){
    var randonQuote = quotes[Math.floor(math.random() *quotes.length)]
    output.innerHTML = randomQuote;
})

let btn=document.getElementById('btn'); 
let output = document.getElementById('output');
let quotes =
[
    '“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein',
'“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
'"If youre not a good shot today, dont worry. There are other ways to be useful."Sasha Novikov a.k.a Sova',
'“Don’t go through life, grow through life.” - Eric Butterworth',
'“You smile, but you wanna cry. You talk, but you wanna be quiet. You pretend like you’re happy, but you aren’t.”',
'“What a lovely surprise to finally discover how unlonely being alone can be.” – Ellen Burstyn ',
'“As I get older I’m more and more comfortable being alone.” -Sienna Miller',
'“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”– Malcolm X',
'“A little progress each day adds up to big results”– Satya Nani',
'“You don’t have to be great to start, but you have to start to be great.” – Zig Ziglar',






    
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

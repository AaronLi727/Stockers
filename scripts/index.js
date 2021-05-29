var symbol = localStorage.getItem("symbol"); //holds stock symbol (ex: GME, PLTR, TSLA, AAPL, ...)
var open = localStorage.getItem("open"); //holds stock open price
var close = localStorage.getItem("close"); //holds stock close price
var high = localStorage.getItem("high");
var low = localStorage.getItem("low");
var volume = localStorage.getItem("volume");
var afterHours = localStorage.getItem("afterHours");
var preMarket = localStorage.getItem("preMarket");
var difference = open - close; //difference between open and close price
var round = difference.toFixed(2); //rounding difference to 2 decimals
var img = document.createElement('img');
var src = document.getElementById("header")
if(open - close >= 0){ //test whether its positive or negative (to the moon or not)
    s.innerHTML += '<p> Symbol: ' + symbol + '</p>';
    s.innerHTML += '<p> Difference: ' + round + '</p>';
    s.innerHTML += '<p> Open : ' + open;
    s.innerHTML += '<p> High : ' + high;
    s.innerHTML += '<p> Low : ' + low;
    s.innerHTML += '<p> Close : ' + close;
    s.innerHTML += '<p> Volume : ' + volume;
    s.innerHTML += '<p> After Hours : ' + afterHours;
    s.innerHTML += '<p> PreMarket : ' + preMarket;
    document.body.style.backgroundImage = "url(images/rocketgif.gif)";
    console.log(open-close);
}else {
    s.innerHTML += '<p> Symbol: ' + symbol + '</p>';
    s.innerHTML += '<p> Difference: ' + round + '</p>';
    s.innerHTML += '<p> Open : ' + open;
    s.innerHTML += '<p> High : ' + high;
    s.innerHTML += '<p> Low : ' + low;
    s.innerHTML += '<p> Close : ' + close;
    s.innerHTML += '<p> Volume : ' + volume;
    s.innerHTML += '<p> After Hours : ' + afterHours;
    s.innerHTML += '<p> PreMarket : ' + preMarket;
    document.body.style.backgroundImage = "url(images/badrocket.gif)";
}
console.log(symbol)
console.log(open)
console.log(close)


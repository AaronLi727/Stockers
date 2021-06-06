// var request = new XMLHttpRequest()

//request.open('GET','https://api.polygon.io/v1/open-close/AAPL/2020-10-14?unadjusted=true&apiKey=VCGLIIfAOcBMwgq5lY1hO9XE5bNsa5dM', true)




document.getElementById('form1').onsubmit = function() { 
    document.getElementById('stocks');
    //console.log(document.getElementById('stocks').value);
    let stock = document.getElementById('stocks').value;
    console.log(stock)
    return false;
}


var today = new Date();

var dd = today.getDate() - 1;
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (today.getDay() == 6) //checks if day is saturday
{
    dd = today.getDate() - 1;
    // console.log(today.getDate());
    // console.log(today.getDay());
}
if(today.getDay() == 0 ) { //checks if day is sunday
    dd = today.getDate() - 2;
}
if(today.getDay() == 1) { //check if day is monday
    dd = today.getDate() - 3;
    // console.log(dd);
    // console.log(today.getDate());
}
// var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
// var lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
// console.log(firstDay)
// console.log(lastDay)
// NEED TO CHECK FOR HOLIDAYS !!!!!

//INPUT A CHECK WHEN MARKET CLOSES AFTER 5:30pm (I THINK DO MORE RESEARHASHDSAHDA)
if(dd < 10) {
    dd = '0'+dd;
}
if(mm < 10) {
    mm = '0'+mm;
}
// console.log(today.getDate())
// console.log(firstDay.getDate())
// if (today.getDate == firstDay.getDate) {
//     yyyy = lastDay.getFullYear()
//     dd = lastDay.getDate()
//     mm = lastDay.getMonth() + 1
//     console.log(yyyy)
//     console.log(mm)
//     console.log(dd)
// }

today = yyyy + '-' + mm + '-' +dd;


// document.getElementById('submit').onclick = function() {
//     let stock = document.getElementById('stocks').value;
//     request.open('GET',`https://api.polygon.io/v1/open-close/${stock}/2020-10-14?unadjusted=true&apiKey=VCGLIIfAOcBMwgq5lY1hO9XE5bNsa5dM`, true)
    
//     request.onload = function() {
//         var data = JSON.parse(request.open)
//         console.log(data)
//     }
// }
// // request.onload = function () {
// //     var data = JSON.parse(this.response)
// //     console.log(data)
// // }

// request.send()


// var data = 
// '[{ "status": "OK", "from": "2020-10-14T00:00:00.000Z", "symbol": "AAPL", "open": 324.66, "close": 325.12 }]'

// data= JSON.parse(data);
// console.log(data[0])
var request;

document.getElementById('submit').addEventListener('click', makeRequest);

function makeRequest() {
    request = new XMLHttpRequest();

    if(!request) {
        alert("Error");
        return false;
    }
    let stock = document.getElementById('stocks').value;
    request.onreadystatechange = alertContents;
    request.open('GET',`https://api.polygon.io/v1/open-close/${stock}/${today}?unadjusted=true&apiKey=VCGLIIfAOcBMwgq5lY1hO9XE5bNsa5dM`, true)
    request.onload = function() {
        var data = JSON.parse(this.response)
        localStorage.setItem("symbol", data.symbol);
        localStorage.setItem("open", data.open);
        localStorage.setItem("close", data.close);
		localStorage.setItem("high", data.high);
		localStorage.setItem("low", data.low);
		localStorage.setItem("volume", data.volume);
		localStorage.setItem("afterHours", data.afterHours);
		localStorage.setItem("preMarket", data.preMarket);
        console.log(data)
        console.log(data.symbol)
        //symbol.innerHTML += '<p> Stock Symbol: ' + data.symbol + '</p>';
    }
    request.send();
}

function alertContents() {
    if(request.readyState == XMLHttpRequest.DONE) {
        if(request.status === 200) {
            //alert(request.responseText);
            location.href = "rocket.html";
            console.log("Success");
            //console.log(request.responseText);
        } else {
            //alert('Problem');
            console.log("Not Found");
        }
    }
}

// submit button onclick will relocate user to link (href)
// document.getElementById("submit").onclick = function() {
//     location.href = "rocket.html";
// }

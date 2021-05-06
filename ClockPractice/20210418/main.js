let thisH1 = document.getElementsByTagName("h1")[0];

// thisH1.innerHTML = currentTime.toLocaleTimeString();
let timer = setInterval(showTime,1000)
function showTime(){
    let currentTime = new Date();
    thisH1.innerHTML = currentTime.toLocaleTimeString();
}
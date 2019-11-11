document.addEventListener('DOMContentLoaded', function(){


document.querySelector('.mp4').addEventListener("click", mp4Send, false); 
document.querySelector('.mp3').addEventListener("click", mp3Send, false); 


function mp4Send(){

chrome.tabs.query({
currentWindow: true,
active: true
},
function(tabs){
    var url = tabs[0].url;
    var locate = url.split("=");
    var locate = locate[1];
    window.open("https://y2mate.com/pt/youtube/" + locate)
})
}

function mp3Send(){
    chrome.tabs.query({
    currentWindow: true,
    active: true
    },
    function(tabs){
        var url = tabs[0].url;
        var locate = url.split("=");
        var locate = locate[1];
        window.open("https://y2mate.com/pt/youtube-to-mp3/" + locate)
    })
    }

},false); 

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var locate = url.split("="); 
        var locate  = locate[1];
        window.open("https://y2mate.com/pt/youtube/"+locate);
    });
}
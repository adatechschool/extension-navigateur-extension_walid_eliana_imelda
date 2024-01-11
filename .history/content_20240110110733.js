chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'changeFont') {
    chrome.scripting.executeScript({
        function: changeFont,
        args: [request.font]
    });
   }
});

function changeFont(font) {
    document.body.style.fontFamily = font;
}
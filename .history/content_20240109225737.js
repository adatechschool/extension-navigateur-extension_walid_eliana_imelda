chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'changeFont') {
document.body.style.fontFamily = request.font;
    }
});
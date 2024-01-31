chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'applyFontFamily') {
        applyFontFamily(request.selectedFontFamily); document.body.style.fontFamily = request.fontFamily;
    }
  });
  
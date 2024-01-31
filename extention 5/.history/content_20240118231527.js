chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'applyFontFamily') {
      document.body.style.fontFamily = request.fontFamily;
    }
  });
  
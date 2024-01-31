chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'applyFont') {
      document.body.style.fontFamily = request.font;
    }
  });
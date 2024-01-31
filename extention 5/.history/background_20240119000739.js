chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'changeFont') {
      chrome.tabs.executeScript(sender.tab.id, {
        code: `document.body.style.fontFamily = "${request.font}";`
      });
    }
  });
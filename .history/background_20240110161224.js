chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getSelection") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { text: "Hello from background!" });
      });
    }
  });
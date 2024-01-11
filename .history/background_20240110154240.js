if (chrome.browserAction) {
    chrome.browserAction.setBadgeText({ text: "123" });
  } else {
    console.error("chrome.browserAction is undefined");
  }
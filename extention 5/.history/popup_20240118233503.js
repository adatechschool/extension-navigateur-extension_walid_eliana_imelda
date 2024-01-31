document.getElementById('apply-button').addEventListener('click', function () {
    const selectedFontFamily = document.getElementById('font-family').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: 'applyFontFamily', fontFamily: selectedFontFamily });
    });
  });
document.addEventListener('DOMContentLoaded', function () {
  const fontSelector = document.getElementById('fontSelector');
  const applyFontButton = document.getElementById('applyFont');

  applyFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'changeFont',
        font: fontSelector.value
      });
    });
  });
});
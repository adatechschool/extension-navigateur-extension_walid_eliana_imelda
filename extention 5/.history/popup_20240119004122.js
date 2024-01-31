/* document.addEventListener('DOMContentLoaded', function () {
  const fontSelector = document.getElementById('fontSelector');
  const applyFontButton = document.getElementById('applyFont');

  applyFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'changeFont',font: fontSelector.value
      });
    });
  });
}); */

document.addEventListener('DOMContentLoaded', function () {
  const fontSelector = document.getElementById('fontSelector');
  const applyFontButton = document.getElementById('applyFont');

  applyFontButton.addEventListener('click', function () {
    const selectedFont = fontSelector.value;

    if (selectedFont === 'OpenDyslexic') {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'changeFont',
          font: 'OpenDyslexic'
        });
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'changeFont',
          font: selectedFont
        });
      });
    }
  });
});
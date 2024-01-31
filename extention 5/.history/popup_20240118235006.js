document.getElementById('apply-font').addEventListener('click', function () {
    const selectedFont = document.getElementById('font-selector').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: 'applyFont', font: selectedFont });
    });
  });
  
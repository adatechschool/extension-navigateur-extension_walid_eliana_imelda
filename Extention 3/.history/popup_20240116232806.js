
document.addEventListener('DOMContentLoaded', function() {
  let applyButton = document.getElementById('apply-button');
  let fontFamilySelect = document.getElementById('font-family');


  applyButton.addEventListener('click', function() {
    let selectedFontFamily = fontFamilySelect.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'applyChanges', selectedFontFamily: selectedFontFamily });
    });
  });
});


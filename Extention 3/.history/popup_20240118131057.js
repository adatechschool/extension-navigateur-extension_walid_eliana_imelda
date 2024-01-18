document.addEventListener('DOMContentLoaded', function() {
  var applyButton = document.getElementById('apply-button');
  var fontFamilySelect = document.getElementById('font-family');

  applyButton.addEventListener('click', function() {
    var selectedFontFamily = fontFamilySelect.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'applyChanges', selectedFontFamily: selectedFontFamily });
    });
  });
});


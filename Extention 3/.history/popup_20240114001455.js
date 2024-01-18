// popup.js
document.addEventListener('DOMContentLoaded', function() {
  var applyButton = document.getElementById('apply-button');
  var fontFamilySelect = document.getElementById('font-family');
  var boldLettersSelect = document.getElementById('bold-letters');

  applyButton.addEventListener('click', function() {
    var selectedFontFamily = fontFamilySelect.value;
    var boldLetters = Array.from(boldLettersSelect.selectedOptions).map(option => option.value);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'applyChanges', selectedFontFamily: selectedFontFamily, boldLetters: boldLetters });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var replaceButton = document.getElementById('replace-button');
    var newFontFamilyInput = document.getElementById('new-font-family');
  
    replaceButton.addEventListener('click', function() {
      var newFontFamily = newFontFamilyInput.value || 'monospace';
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceFontFamily', newFontFamily: newFontFamily });
      });
    });
  });
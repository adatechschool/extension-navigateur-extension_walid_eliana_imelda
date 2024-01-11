document.addEventListener('DOMContentLoaded', function() {
    var applyButton = document.getElementById('apply-button');
    var fontSelector = document.getElementById('font-selector');
    var fontSizeInput = document.getElementById('font-size');
  
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
      var state = backgroundPage.state;
      fontSelector.value = state.selectedFont;
      fontSizeInput.value = parseInt(state.selectedFontSize);
    });

    applyButton.addEventListener('click', function() {
      var selectedFont = fontSelector.value;
      var selectedFontSize = fontSizeInput.value + 'px';
  
      chrome.runtime.sendMessage({ action: 'applyChanges', font: selectedFont, fontSize: selectedFontSize });
    });
  });

  console.log('chatons')

let state = {
    selectedFont: 'Arial',
    selectedFontSize: '16px'
  };
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'applyChanges') {
      state.selectedFont = request.font;
      state.selectedFontSize = request.fontSize;
      applyChanges();
    }
  });
  
  function applyChanges() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: changeFontAndSize,
        args: [state.selectedFont, state.selectedFontSize]
      });
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: changeSpecificLetters,
        args: [state.selectedFont, ['p', 'b', 'z', 's']]
      });
    });
  }
  
  function changeFontAndSize(font, fontSize) {
    document.body.style.fontFamily = font;
    document.body.style.fontSize = fontSize;
  }
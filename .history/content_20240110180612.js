chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'replaceFontFamily') {
      replaceFontFamily(request.newFontFamily);
    }
  });
  
  function replaceFontFamily(newFontFamily) {
    document.querySelectorAll('*').forEach(element => {
      element.style.fontFamily = newFontFamily;
    });
  }
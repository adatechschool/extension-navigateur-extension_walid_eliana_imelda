chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'applyFontFamily') {
        applyFontFamily(request.selectedFontFamily); document.body.style.fontFamily = request.fontFamily;
    }
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'applyChanges') {
      applyChanges(request.selectedFontFamily);
    }
  });
  
  function applyChanges(selectedFontFamily) {
  
    let styleDyslexic = document.createElement("style");
    styleDyslexic.type = "text/css";
    styleDyslexic.textContent = "@font-face { font-family: OpenDyslexic; src: url('"
                            + chrome.extension.getURL("OpenDyslexic-Regular.otf")
                            + "'); }"
                            ;
    document.head.appendChild(styleDyslexic);
  
  document.head.appendChild (styleDyslexic);
    document.querySelectorAll('*').forEach(element => {
      element.style.fontFamily = selectedFontFamily;
    });
  };
  
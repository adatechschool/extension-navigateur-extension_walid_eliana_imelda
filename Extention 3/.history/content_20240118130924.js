chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyChanges') {
    applyChanges(request.selectedFontFamily);
  }
});

function applyChanges(selectedFontFamily) {
  let OpenDi           = document.createElement ("style");
 OpenDi.type          = "text/css";
OpenDi.textContent   = "@font-face { font-family: OpenDyslexic; src: url('"
                      + chrome.extension.getURL ("OpenDyslexic-Regular.otf")
                          + "'); }"
                          ;
  document.head.appendChild (OpenDi);

  document.querySelectorAll('*').forEach(element => {
    element.style.fontFamily = selectedFontFamily;
  });
}

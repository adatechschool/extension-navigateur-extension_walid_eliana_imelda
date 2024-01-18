chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyChanges') {
    applyChanges(request.selectedFontFamily);
  }
});

function applyChanges(selectedFontFamily) {
  let OpenDyslexic  = document.createElement ("style");
OpenDyslexic.type       = "text/css";
OpenDyslexic.textContent   = "@font-face { font-family:OpenDyslexic-Regular.otf; src: url('"+ chrome.extension.getURL ("OpenDyslexic-regular.otf")
 + "'); }"
;
document.head.appendChild (styleNode);
  document.querySelectorAll('*').forEach(element => {
    element.style.fontFamily = selectedFontFamily;
  });
}



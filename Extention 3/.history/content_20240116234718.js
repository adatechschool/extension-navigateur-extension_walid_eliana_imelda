chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyChanges') {
    applyChanges(request.selectedFontFamily);
  }
});

function applyChanges(selectedFontFamily) {
  document.querySelectorAll('*').forEach(element => {
    element.style.fontFamily = selectedFontFamily;
  });
}

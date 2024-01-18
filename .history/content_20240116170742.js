chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyChanges') {
    applyChanges(request.selectedFontFamily);
  }
});

function applyChanges(selectedFontFamily) {
  const elements = document.querySelectorAll('*');

  elements.forEach(element => {
    element.style.fontFamily = selectedFontFamily;

    const textContent = element.textContent;
    if (textContent) {
      const newTextContent = textContent.replace(/[szbp]/gi, match => {
        return `<span style="font-weight: bold;">${match}</span>`;
      });
      element.innerHTML = newTextContent;
    }
  });
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyChanges') {
    applyChanges(request.selectedFontFamily);
  }
});

function applyChanges(selectedFontFamily) {
  const boldLetters = ['b', 'p', 's', 'z'];

  document.querySelectorAll('*').forEach(element => {
    element.style.fontFamily = selectedFontFamily;

    // Make specific letters bold
    const textContent = element.textContent;
    if (textContent) {
      const newTextContent = textContent.replace(/[bp sz]/gi, match => {
        return boldLetters.includes(match.toLowerCase()) ? `<span style="font-weight: bold;">${match}</span>` : match;
      });
      element.innerHTML = newTextContent;
    }
  });
}
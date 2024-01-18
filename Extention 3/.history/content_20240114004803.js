chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyChanges') {
    applyChanges(request.selectedFontFamily);
  }
});

function applyChanges(selectedFontFamily) {
  const boldLetters = ['b', 'p', 's', 'z'];

  const styleElement = document.createElement('style');
  styleElement.textContent = `
    * {
      font-family: ${selectedFontFamily} !important;
    }

    ${boldLetters.map(letter => `
      :not([style*="font-weight: bold;"])::not(textarea)::not(input):contains('${letter}') {
        font-weight: bold !important;
      }
    `).join('')}
  `;

  document.head.appendChild(styleElement);
}
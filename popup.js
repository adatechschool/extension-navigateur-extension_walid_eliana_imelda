// Attach an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', function() {

  // Identify the 'replace-button' and 'new-font-family' DOM elements
  const replaceButton = document.getElementById('replace-button');
  const newFontFamilyInput = document.getElementById('new-font-family');

  // Attach an event listener for the 'click' event to the 'replace-button'
  replaceButton.addEventListener('click', function() {

    // Get the new font family from the input field
    const newFontFamily = newFontFamilyInput.value || 'monospace';

    // Query for the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

      // Extract the ID of the active tab
      const activeTabId = tabs[0].id;

      // Send a message to the active tab to replace the font family
      chrome.tabs.sendMessage(activeTabId, {
        action: 'replaceFontFamily',
        newFontFamily: newFontFamily
      });
    });
  });
});




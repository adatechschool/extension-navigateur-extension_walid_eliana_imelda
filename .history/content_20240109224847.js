document.addEventListener('DOMContentLoaded', function() {
    var applyButton = document.getElementById('apply-button');

    applyButton.addEventListener('click', function() {
var fontSelector = document.getElementById('font-selector');
var selectedFont = fontSelector.value;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'changeFont', font: selectedFont });
});
    });
});
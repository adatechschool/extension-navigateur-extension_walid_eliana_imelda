document.addEventListener('DOMContentLoaded', function() {
    var applyButton = document.getElementById('apply-button');

    applyButton.addEventListener('click', function() {
    var fontSelector = document.getElementById('font-selector');
    var selectedFont = fontSelector.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    function: changeFont,
    args: [selectedFont]
            });
        });
    });
});

    function changeFont(selectedFont) {
    document.body.style.fontFamily = selectedFont;
    }
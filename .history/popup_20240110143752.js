document.addEventListener('DOMContentLoaded', function() {
    var applyButton = document.getElementById('apply-button');

    applyButton.addEventListener('click', function() {
    var fontSelector = document.getElementById('font-selector');
    var selectedFont = fontSelector.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    function: changeFont,
    args: [selectedFont, ['b','p', 's', 'z']]
            });
        });
    });
});

function changeSpecificFonts(selectedFont, letters) {
    document.querySelectorAll('*').forEach(element => {
    const textContent = element.textContent || element.innerText || '';
    const modifiedText = textContent.split('').map(char => {
        return letters.includes(char.toLowerCase()) ? `<span style="font-family: ${selectedFont}">${char}</span>` : char;
    }).join('');
    element.innerHTML = modifiedText;
    });
}

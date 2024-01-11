document.addEventListener('DOMContentLoaded', function() {
    let applyButton = document.getElementById('apply-button');

    applyButton.addEventListener('click', function() {
    let fontSelector = document.getElementById('font-selector');
    let selectedFont = fontSelector.value;

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
        return letters.includes(char.toLowerCase()) ? `<span style="monospace": ${selectedFont}">${char}</span>` : char;
    }).join('');
    element.innerHTML = modifiedText;
    });
}

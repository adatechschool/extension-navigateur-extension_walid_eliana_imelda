chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'changeSpecificFonts') {
    chrome.scripting.executeScript({
        function: changeSpecificFonts,
        args: [request.font, request.letters]
    });
    }
    });

 function changeSpecificFonts(font, letters) {
    document.querySelectorAll('*').forEach(element => {
    const textContent = element.textContent || element.innerText || '';
    const modifiedText = textContent.split('').map(char => {
        return letters.includes(char.toLowerCase()) ? `<span style="font-family: ${font}">${char}</span>` : char;
    }).join('');
    element.innerHTML = modifiedText;
    });
}  
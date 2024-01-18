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

 //

 // content.js

// Fonction pour appliquer les changements de style
function applyStyleToLetters() {
  const elements = document.querySelectorAll('*');

  elements.forEach(element => {
    const textNodes = getTextNodes(element);

    textNodes.forEach(textNode => {
      const newTextContent = textNode.nodeValue.replace(/[bpzs]/gi, match => {
        return `<span style="font-weight: bold;">${match}</span>`;
      });

      const tempElement = document.createElement('div');
      tempElement.innerHTML = newTextContent;

      while (tempElement.firstChild) {
        textNode.parentNode.insertBefore(tempElement.firstChild, textNode);
      }

      textNode.parentNode.removeChild(textNode);
    });
  });
}

// Fonction pour obtenir tous les nœuds de texte dans un élément
function getTextNodes(element) {
  const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];

  while (treeWalker.nextNode()) {
    textNodes.push(treeWalker.currentNode);
  }

  return textNodes;
}

// Appliquer les changements lorsque la page est chargée
document.addEventListener('DOMContentLoaded', applyStyleToLetters);

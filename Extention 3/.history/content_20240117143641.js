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



function mettreEnGrasTexte(node) {
  const lettresSpecifiees = ["b", "d", "p", "t", "f", "v", "m", "n", "u", "c", "o", "e"];
  const contenu = node.nodeValue;

  let fragments = [];
  let fragmentEnCours = "";

  for (let i = 0; i < contenu.length; i++) {
    const lettre = contenu[i].toLowerCase();

    if (lettresSpecifiees.includes(lettre)) {
      // Ajouter la partie non textuelle précédente
      if (fragmentEnCours.length > 0) {
        fragments.push(document.createTextNode(fragmentEnCours));
        fragmentEnCours = "";
      }

      // Créer un élément <b> pour chaque lettre spécifiée
      const bElement = document.createElement('b');
      bElement.textContent = contenu[i];
      fragments.push(bElement);
    } else {
      // Accumuler les parties non textuelles
      fragmentEnCours += contenu[i];
    }
  }

  // Ajouter la dernière partie non textuelle
  if (fragmentEnCours.length > 0) {
    fragments.push(document.createTextNode(fragmentEnCours));
  }

  // Remplacer le nœud de texte d'origine par les fragments
  fragments.forEach(fragment => {
    node.parentNode.insertBefore(fragment, node);
  });

  node.parentNode.removeChild(node);
}

function parcourirTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    mettreEnGrasTexte(node);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      parcourirTextNodes(child);
    }
  }
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.toggle) {
      parcourirTextNodes(document.body);
    }
  }
);
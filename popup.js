document.addEventListener('DOMContentLoaded', function() {
  let toggleButton = document.getElementById('toggleButton');

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0];

    toggleButton.addEventListener('click', function() {
      chrome.tabs.sendMessage(tab.id, {toggle: true});
    });
  });
});



  

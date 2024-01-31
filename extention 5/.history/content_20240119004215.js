
/*chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'changeFont') {
      document.body.style.fontFamily = request.font;
    }
  }); */

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'changeFont') {
      if (request.font === 'OpenDyslexic') {
        const fontUrl = chrome.runtime.getURL('fonts/OpenDyslexic-Regular.otf');
        const fontFace = new FontFace('OpenDyslexic', `url(${fontUrl})`);
  
        fontFace.load().then(function (loadedFont) {
          document.fonts.add(loadedFont);
          document.body.style.fontFamily = 'OpenDyslexic';
        });
      } else {
        document.body.style.fontFamily = request.font;
      }
    }
  });
  
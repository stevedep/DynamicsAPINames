    document.getElementById("setNames").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['setNames.js']
        });
      });
    });

    document.getElementById("restoreNames").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['restoreNames.js']
        });
      });
    });
  

  // Call the setClickforSetNames function when the DOM is ready
 // document.addEventListener('DOMContentLoaded', setClickforSetNames);
 //setClickforSetNames();
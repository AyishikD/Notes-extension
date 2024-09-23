chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getCurrentTime") {
      const video = document.querySelector('video');
      sendResponse({ currentTime: video ? video.currentTime : null });
    }
  });
  
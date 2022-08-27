/* global chrome */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if    (changeInfo.status == 'complete') {
    chrome.scripting.executeScript({
      files: ['contentScript.js'],
      target: {tabId: tab.id}
    })
  }
  chrome.tabs.sendMessage(tabId, {
    type: "NEW",
    url: tab.url,
  });
});

let latestHeaders = {};

chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    if (details.type === 'main_frame') {
      const headers = {};
      details.responseHeaders.forEach(header => {
        headers[header.name.toLowerCase()] = header.value;
      });
      latestHeaders[details.url] = headers;
      chrome.storage.local.set({ headers: latestHeaders });
    }
  },
  { urls: ["<all_urls>"] },
  ['responseHeaders']
);
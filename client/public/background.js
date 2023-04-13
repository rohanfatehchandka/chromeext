chrome.contextMenus.create({
  id: "searchOnMyWebsite",
  title: "Search '%s' on my website",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "searchOnMyWebsite") {
    var selectedText = info.selectionText;

    console.log("The selected text is");
    console.log(selectedText);

    fetch("http://localhost:5000/factcheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedText), // Ensure selectedText is passed as JSON string
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error sending request to API server");
        }
      })
      .then((data) => {
        console.log(data.result[0]);
        console.log(data.result[1]);
        chrome.tabs.create({
          url: `https://twitter.com/intent/tweet?text=${data.result[0]}`,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

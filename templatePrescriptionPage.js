chrome.runtime.onMessage.addListener(function (message) {
    const { command } = message;

    switch (command) {
        case 'save-prescription':
            saveButton = document.querySelector("#main > div:nth-child(3) > div.v-toolbar > div > div.v-row.v-justify-content-right > div.v-col-auto.pa-0 > div:nth-child(2) > div > button");
            saveButton.click();
    }
});

// saveButtonText = document.querySelector("#main > div:nth-child(3) > div.v-toolbar > div > div.v-row.v-justify-content-right > div.v-col-auto.pa-0 > div:nth-child(2) > div > button")
// saveButtonText.insertAdjacentText("afterend", " (Ctrl + Shift + S)")
// saveButtonText.innerHTML = saveButtonText + " (Ctrl + Shift + S)"
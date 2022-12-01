chrome.runtime.onMessage.addListener(function (message) {
    const { command } = message;

    switch (command) {
        case 'prescribe-button':
            prescribeButton = document.querySelector("#main > div:nth-child(2) > div:nth-child(2) > div.v-col-fill.v-relative > div:nth-child(2) > div:nth-child(4) > div > div:nth-child(4) > div.v-col-12.v-col-sm-auto.pa-0 > div > div:nth-child(1) > button");
            prescribeButton.click();
    }
});

// prescribeButtonText = document.querySelector("#main > div:nth-child(2) > div:nth-child(2) > div.v-col-fill.v-relative > div:nth-child(2) > div:nth-child(4) > div > div:nth-child(4) > div.v-col-12.v-col-sm-auto.pa-0 > div > div:nth-child(1) > button")
// prescribeButtonText.insertAdjacentText("afterend", " (Ctrl + Shift + D)")
// prescribeButtonText.innerHTML = prescribeButtonText.innerHTML + " (Ctrl + Shift + D)"
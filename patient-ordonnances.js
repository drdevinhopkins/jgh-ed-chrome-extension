addByListText = document.querySelector("#ctl00_phMain_gridOrdonnances_ctl00_ctl02_ctl00_mainToolBar > div > div > div > ul > li.rtbItem.rtbSplBtn > a > span > span > span > span.rtbSplBtnActivator > span")
addByListText.insertAdjacentText("afterend", " (Ctrl + Shift + A)")



// const container = document.getElementsByClassName('rbGOge SeRypc');



// const containerChildren = container[0].childNodes;

// const leftArrow = containerChildren[1];
// const rightArrow = containerChildren[2];

chrome.runtime.onMessage.addListener(function (message) {
    const { command } = message;
    // direction === 'left' ? leftArrow.click() : rightArrow.click();
    // alert(`Command: ${command}`);


    switch (command) {
        case 'add-by-list':
            addByListButton = document.querySelector("#ctl00_phMain_gridOrdonnances_ctl00_ctl02_ctl00_mainToolBar > div > div > div > ul > li.rtbItem.rtbSplBtn > a");
            addByListButton.click();
        // break;
        // case 'save-prescription':
        //     saveButton = document.querySelector("#main > div:nth-child(3) > div.v-toolbar > div > div.v-row.v-justify-content-right > div.v-col-auto.pa-0 > div:nth-child(2) > div > button");
        //     saveButton.click();
    }
});



// var layer1 = document.createElement("li")
// layer1.setAttribute('class', 'rtsLI')
// var layer2 = document.createElement("a")
// layer2.setAttribute('class', 'rtsLink')
// var layer3 = document.createElement("span")
// layer3.setAttribute('class', 'rtsOut')
// var layer4 = document.createElement("span")
// layer4.setAttribute('class', 'rtsIn')
// var layer5 = document.createElement("span")
// layer5.setAttribute('class', 'rtsrtsTxtOut')
// var text = document.createTextNode("**TESTING123**")
// layer1.appendChild(layer2)
// layer2.appendChild(layer3)
// layer3.appendChild(layer4)
// layer4.appendChild(layer5)
// layer5.appendChild(text)
// document.querySelector("#ctl00_ctl00_phMain_phMain_rtsPatient > div > ul").appendChild(layer1)



// document.querySelector("#ctl00_phMain_gridOrdonnances_ctl00_ctl02_ctl00_mainToolBar > div > div > div > ul").appendChild(text)
// const tabs = await chrome.tabs.query({
//     url: [
//         "https://developer.chrome.com/docs/webstore/*",
//         "https://developer.chrome.com/docs/extensions/*",
//     ],
// });

// const collator = new Intl.Collator();
// tabs.sort((a, b) => collator.compare(a.title, b.title));

// const template = document.getElementById("li_template");
// const elements = new Set();
// for (const tab of tabs) {
//     const element = template.content.firstElementChild.cloneNode(true);

//     const title = tab.title.split("-")[0].trim();
//     const pathname = new URL(tab.url).pathname.slice("/docs".length);

//     element.querySelector(".title").textContent = title;
//     element.querySelector(".pathname").textContent = pathname;
//     element.querySelector("a").addEventListener("click", async () => {
//         // need to focus window as well as the active tab
//         await chrome.tabs.update(tab.id, { active: true });
//         await chrome.windows.update(tab.windowId, { focused: true });
//     });

//     elements.add(element);
// }
// document.querySelector("ul").append(...elements);

// const button = document.querySelector("button");
// button.addEventListener("click", async () => {
//     const tabIds = tabs.map(({ id }) => id);
//     const group = await chrome.tabs.group({ tabIds });
//     await chrome.tabGroups.update(group, { title: "DOCS" });
// });

// chrome.runtime.sendMessage({ method: "getStatus", data: "xxx" }, function (res) {
//     document.getElementById("popupElement1").innerText = res.method;
//     document.getElementById("popupElement2").innerText = res.data;
//     return true;
// });

// var tab_title = '';
// function display_h1(results) {
//     h1 = results;
//     document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
// }
// chrome.tabs.query({ active: true }, function (tabs) {
//     var tab = tabs[0];
//     tab_title = tab.title;
//     chrome.tabs.executeScript(tab.id, {
//         code: 'document.querySelector("h1").textContent'
//     }, display_h1);
// });



var patient_Unumber = '';
var patient_gender_age = '';
var patient_DOB = '';
var patient_name = '';
var patient_RAMQ = '';
var patient_RAMQ_exp = '';
var patient_treatingMD = '';
var patient_treatingMD_license = '';
var patient_phone = '';
var patient_postal_code = '';

function displaySticker() {
    document.querySelector("#sticker").innerHTML = "<p>U-" + patient_Unumber + "<br>" + patient_name + "<br>" + patient_gender_age + "    " + patient_DOB + "<br>" + patient_RAMQ + "   " + patient_RAMQ_exp + "<br>" + patient_phone + "</p>";
}

function update_Unumber(results) {
    patient_Unumber = results;
    displaySticker();
}
function update_gender_age(results) {
    patient_gender_age = results.toString().charAt(0);
    displaySticker();
}
function update_DOB(results) {
    patient_DOB = results;
    displaySticker();
}
function update_name(results) {
    patient_name = results;
    displaySticker();
}
function update_RAMQ(results) {
    patient_RAMQ = results;
    displaySticker();
}
function update_RAMQ_exp(results) {
    patient_RAMQ_exp = results;
    displaySticker();
}
function update_treatingMD(results) {
    patient_treatingMD = results;
    displaySticker();
}
function update_treatingMD_license(results) {
    patient_treatingMD_license = results;
    displaySticker();
}
function update_phone(results) {
    patient_phone = results;
    displaySticker();
}
function update_postal_code(results) {
    patient_postal_code = results;
    displaySticker();
}


chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("ctl00_ctl00_phMain_phMain_edNodossier").textContent'
    }, update_Unumber);
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("ctl00_ctl00_phMain_phMain_edAge").textContent'
    }, update_gender_age);
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("ctl00_ctl00_phMain_phMain_edDateNaissance").textContent'
    }, update_DOB);
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("ctl00_ctl00_phMain_phMain_edNom").textContent'
    }, update_name);
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("ctl00_ctl00_phMain_phMain_edNoRAMQ").textContent'
    }, update_RAMQ);
    // chrome.tabs.executeScript(tab.id, {
    //     code: 'document.getElementById("").textContent'
    // }, update_RAMQ_exp);
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("spanMedTraitant").textContent'
    }, update_treatingMD);
    // chrome.tabs.executeScript(tab.id, {
    //     code: 'document.getElementById("").textContent'
    // }, update_treatingMD_license);
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("ctl00_ctl00_phMain_phMain_edTel1").textContent'
    }, update_phone);
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("ctl00_ctl00_phMain_phMain_edTel1").textContent'
    }, update_postal_code);



});


// function exportToPDF() {
//     var element = document.getElementById('container');
//     var opt = {
//         margin: 1,
//         filename: 'myfile.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     // New Promise-based usage:
//     html2pdf().set(opt).from(element).save();
// }


document.addEventListener('DOMContentLoaded', function () {
    const mainDiv = document.getElementById('mainDiv');
    const container = document.getElementById('container');
    const button = document.getElementById('exportToPDF');

    button.addEventListener('click', () => {
        html2pdf().from(container).toPdf().get('pdf').then(function (pdf) {
            window.open(pdf.output('bloburl'), '_blank').print();
        });
    });

})
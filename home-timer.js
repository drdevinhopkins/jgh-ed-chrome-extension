var div = document.createElement("div")
div.setAttribute('class', 'liens-rapides tile fsCGSI')
var h2 = document.createElement("h2")
h2.textContent = "Chrome Extension"
div.appendChild(h2)
var ul = document.createElement("ul")
var list1 = document.createElement("li")
var list2 = document.createElement("li")
var text = document.createTextNode("Refresh Timer")
var timer = document.createElement("div")
timer.setAttribute('id', 'timer')
timer.textContent = ' '
div.appendChild(ul)
ul.appendChild(list1)
ul.appendChild(list2)
list1.appendChild(text)
list2.appendChild(timer)
document.getElementById("left").appendChild(div)


// countdown for 1 minute
countdown(60);

function countdown(seconds) {
    // current timestamp.
    var now = new Date().getTime();
    // target timestamp; we will compute the remaining time
    // relative to this date.
    var target = new Date(now + seconds * 1000);
    // update frequency; note, this is flexible, and when the tab is
    // inactive, there are no guarantees that the countdown will update
    // at this frequency.
    var update = 500;

    var int = setInterval(function () {
        // current timestamp
        var now = new Date();
        // remaining time, in seconds
        var remaining = (target - now) / 1000;

        // if done, alert
        if (remaining < 0) {
            clearInterval(int);
            location.reload();
            return;
        }

        // format
        var minutes = ~~(remaining / 60);
        var seconds = ~~(remaining % 60);

        // display
        document.getElementById("timer").innerHTML
            = format(minutes) + ":" + format(seconds);



    }, update);
}

function format(num) {
    return num < 10 ? "0" + num : num;
}
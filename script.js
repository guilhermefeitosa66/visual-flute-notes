let createImageElement = function (src) {
    if (src) {
        let img = document.createElement("img")
        img.classList.add("tone")
        img.src = src
        return img
    } else {
        return null
    }
}

let textToToneImagePath = function (text) {
    let twelveTone1 = "c c-sharp d d-sharp e f f-sharp g g-sharp a a-sharp b".split(" ")
    let twelveTone2 = "C C-sharp D D-sharp E F F-sharp G G-sharp A A-sharp B".split(" ")

    if (twelveTone1.includes(text)) {
        return `./images/twelve-tone-1/tone-${text}.svg`
    } else if (twelveTone2.includes(text)) {
        return `./images/twelve-tone-2/tone-${text}.svg`
    } else {
        return false
    }
}

let convertTextToTones = function () {
    let content = text.textContent
    content = content.replaceAll('#', '-sharp')

    let tones = []

    content.trim().split("\n").forEach(string => {
        tones = tones.concat(string.trim().split(" "))
    });

    tones.forEach(tone => {
        const imagePath = textToToneImagePath(tone)
        if (imagePath) {
            tab.appendChild(createImageElement(imagePath))
        }
    });
}

let playClickButton = function () {
    tab.innerHTML = ""
    convertTextToTones()
}

let init = function () {
    convertTextToTones()
}

window.onload = function () {
    play.addEventListener('click', playClickButton)

    init()

    console.log("Page loaded!")
}
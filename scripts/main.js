import VideoTab from "./VideoTab.js";

document.querySelector(".intro").addEventListener("click", () => {
    const newTab = new VideoTab()

    document.querySelector("body").appendChild(newTab)

})

const tabs = (sectionName, imageResource) => {
    const introDiv = document.createElement('div')
    introDiv.classList.add('intro-tab')

    const intro = document.createElement('h2')
    const introText = document.createTextNode(sectionName)
    intro.appendChild(introText)

    const image = document.createElement("img")
    image.setAttribute("src", imageResource)
    image.classList.add("tabs-image")

    const paragraph = document.createElement('p')
    paragraph.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))

    const closeImage = document.createElement('img')
    closeImage.setAttribute("src", "./resources/xmark-solid.svg")
    closeImage.classList.add("close-image")
    closeImage.addEventListener('click', () => {
        introDiv.remove()
    })

    introDiv.append(intro, image, closeImage, paragraph)
    return introDiv
}

document.querySelector(".work").addEventListener('click', () => {
    const newTab = tabs('WORK', "./resources/tab-2.jpg")

    document.querySelector("body").appendChild(newTab)
})
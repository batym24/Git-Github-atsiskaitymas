export default class VideoTab {
    constructor(props){
        this.props = props

        return this.render()
    }

    render(){
        this.introDiv = document.createElement('div')
        this.introDiv.classList.add('intro-tab')

        this.intro = document.createElement('h2')
        this.introText = document.createTextNode("INTRO")
        this.intro.appendChild(this.introText)

        this.video = document.createElement('video')
        this.video.setAttribute("controls", "")
        this.videoSource = document.createElement('source')
        this.videoSource.setAttribute("src", "./resources/tab-1.mp4")
        this.videoSource.setAttribute('type', "video/mp4")
        this.video.appendChild(this.videoSource)

        this.firstPar = document.createElement('p')
        this.firstPar.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))

        this.secondPar = document.createElement('p')
        this.secondPar.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))

        this.closeImage = document.createElement('img')
        this.closeImage.setAttribute("src", "./resources/xmark-solid.svg")
        this.closeImage.classList.add("close-image")
        this.remove()

        this.introDiv.append(this.intro, this.video, this.firstPar, this.secondPar, this.closeImage)
        return this.introDiv
    }

    remove(){
        this.closeImage.addEventListener('click', () => {
            this.introDiv.remove()
        })
    }
}
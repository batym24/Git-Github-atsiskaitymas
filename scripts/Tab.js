export default class Tab {
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
        this.video.setAttribute("width", "90%")
        this.video.setAttribute("controls", "")
        this.videoSource = document.createElement('source')
        this.videoSource.setAttribute("src", "./resources/tab-1.mp4")
        this.videoSource.setAttribute('type', "video/mp4")
        this.video.appendChild(this.videoSource)

        this.closeImage = document.createElement('img')
        this.closeImage.setAttribute("src", "./resources/xmark-solid.svg")
        this.closeImage.classList.add("close-image")
        this.remove()

        this.introDiv.append(this.intro, this.video, this.closeImage)
        return this.introDiv
    }

    remove(){
        this.closeImage.addEventListener('click', () => {
            this.introDiv.remove()
        })
    }
}
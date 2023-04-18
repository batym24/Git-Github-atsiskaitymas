import VideoTab from "./VideoTab.js";

document.querySelector(".intro").addEventListener("click", () => {
    const newTab = new VideoTab()

    document.querySelector("body").appendChild(newTab)

    
})
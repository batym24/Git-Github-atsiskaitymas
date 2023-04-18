import Tab from "./Tab.js";

document.querySelector(".intro").addEventListener("click", () => {
    const newTab = new Tab()

    document.querySelector("body").appendChild(newTab)

    
})
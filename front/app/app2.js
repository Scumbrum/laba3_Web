import { URL } from "./ref.js"
import { Masonry } from "./Masonry.js"
const segment = document.querySelector(".right-segment")
let current = new Masonry(segment)
fetch(URL)
.then(response => response.text())
.then(text => {
    const data = JSON.parse(text)
    for(let image of data.images){
        current.addImage(image)
    }
    current.buildMasonry(segment)
})

import photoloader from "./lib/photoloader.js";
import gallery from './lib/gallery.js';
import gallery_ui from './lib/gallery_ui.js';


function load() {
    return loadPage(config.chemin+'photos')

}


document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        getGalery("/www/canals5/photobox/photos");
    })

const getGalery = function (uri) {
    let promesse = photoloader.loadRessource(uri);
    promesse.then(gallery_ui.display_gallery);
    console.log(promesse);
}

document.querySelector('#next')
.addEventListener('click', e => {
  gallery.next().then(gallery_ui.display_gallery)
})

document.querySelector('#previous')
.addEventListener('click', e => {
  gallery.previous().then(gallery_ui.display_gallery)
})  

document.querySelector('#first')
.addEventListener('click', e => {
  gallery.first().then(gallery_ui.display_gallery)
}) 

document.querySelector('#last')
.addEventListener('click', e => {
  gallery.last().then(gallery_ui.display_gallery)
})  



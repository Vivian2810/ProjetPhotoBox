import photoloader from "./lib/photoloader.js";
import gallery_ui from "./lib/gallery_ui.js";

document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        getGalery("/www/canals5/photobox/photos");
    })

const getGalery = function (uri) {
    let promesse = photoloader.loadRessource(uri);
    promesse.then(gallery_ui.displayPicture);
    console.log(promesse);
}
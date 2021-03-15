import photoloader from "./lib/photoloader.js";
import ui from "./lib/ui.js";
import {config} from "./lib/config.js";

document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        getGalery("/www/canals5/photobox/photos");
    })

const getGalery = function (uri) {
    // photoloader.loadPicture(id).then(photoDetail => {
    //     console.log("Titre : " + photoDetail.photo.titre);
    //     console.log("Type : " + photoDetail.photo.type);
    //     console.log("URL : " + photoDetail.photo.url.href);
    // })
    let promesse = photoloader.loadRessource(uri);
    let promesse2 = photoloader.loadPicture(102);
    promesse.then(ui.displayPicture);
    console.log(promesse);
    console.log(promesse2);
}
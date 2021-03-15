import photoloader from "./lib/photoloader.js";
import ui from "./lib/ui.js";

document.querySelector('#load_gallery')
    .addEventListener('click', e => {

    })

const getPicture = function (id) {
    // photoloader.loadPicture(id).then(photoDetail => {
    //     console.log("Titre : " + photoDetail.photo.titre);
    //     console.log("Type : " + photoDetail.photo.type);
    //     console.log("URL : " + photoDetail.photo.url.href);
    // })
    let promesse = photoloader.loadPicture(id);
    promesse.then(ui.displayPicture);
    promesse.then(getPictureCategorie).then(ui.displayCategorie);
    promesse.then(getPictureComments).then(ui.displayComments);
}
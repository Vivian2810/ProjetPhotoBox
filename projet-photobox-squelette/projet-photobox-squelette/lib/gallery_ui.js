
/*function display_gallery(photo){
    //Récupération de la partie ou sont afficher les gallery
    let sectionPhoto = document.getElementById("gallery_container");
    sectionPhoto.innerHTML = `
        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[0].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[0].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[1].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[1].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[2].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[2].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[3].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[3].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[4].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[4].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[5].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[5].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[6].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[6].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[7].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[7].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[8].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[8].photo.file}">
        </div>
        
        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photo.photos[9].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photo.photos[9].photo.file}">
        </div>
        `;
}*/


import config from './config.js'
import lightbox from './lightbox.js'
import lightbox_ui from './lightbox_ui.js'


function display_gallery( galerie ) {
    let container = document.querySelector('#gallery_container')
    container.innerHTML = galerie.photos.reduce( (acc, elem) => {
        return acc + 
        `
        <div class="vignette" >
        <img data-uri="${elem.links.self.href}"
          src="${config.serveur + elem.photo.thumbnail.href}">
      </div>`
    }, '')

    container.querySelectorAll('.vignette').forEach( elem => {
        elem.addEventListener('click', e => {
            lightbox.load(e.target)[0].then(lightbox_ui.display_lightbox)
        })
    })
    
}

export default {
    display_gallery
}
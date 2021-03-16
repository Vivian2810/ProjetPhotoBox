
function display_gallery(gallery){
    //Récupération de la partie ou sont afficher les gallery
    let sectionPhoto = document.getElementById("gallery_container");
    sectionPhoto.innerHTML = `
        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[0].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[0].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[1].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[1].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[2].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[2].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[3].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[3].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[4].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[4].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[5].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[5].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[6].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[6].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[7].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[7].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[8].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[8].photo.file}">
        </div>
        
        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${gallery.photos[9].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${gallery.photos[9].photo.file}">
        </div>
        `;
}

export default {
    display_gallery
}
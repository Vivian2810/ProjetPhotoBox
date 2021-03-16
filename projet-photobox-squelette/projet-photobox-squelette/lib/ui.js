
function displayPicture(photos) {
    //Récupération de la partie ou sont afficher les photos
    let sectionPhoto = document.getElementById("gallery_container");
    sectionPhoto.innerHTML = `
        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[0].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[0].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[1].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[1].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[2].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[2].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[3].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[3].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[4].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[4].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[5].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[5].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[6].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[6].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[7].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[7].photo.file}">
        </div>

        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[8].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[8].photo.file}">
        </div>
        
        <div class="vignette">
            <img data-uri="/www/canals5/photobox/photos/${photos.photos[9].photo.id}"
                 src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${photos.photos[9].photo.file}">
        </div>
        `;
}


function displayCategorie(categorie) {
    let sectionCategorie = document.getElementById("la_categorie");
    sectionCategorie.innerHTML = `categorie : ${categorie.categorie.descr}`;
}

function displayComments(commentaires) {
    let sectionComments = document.getElementById("les_commentaires");
    sectionComments.innerHTML = commentaires.comments.map((commentaire) => {
        return `<li>${commentaire.titre} : ${commentaire.content}</li>`;
    }).reduce((htmlCode, commentaire) => {
        return htmlCode += commentaire;
    }, "");
}

export default {
    displayPicture,
    displayCategorie,
    displayComments
}

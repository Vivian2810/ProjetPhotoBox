import config from './config.js';
import lightbox from './lightbox.js';
import photoloader from './photoloader.js'

var container = document.getElementById("lightbox_container");

function display_lightbox(data){

}

function show(  ) {
    let l = document.querySelector('#lightbox_container')
    l.classList.add('lightbox_container--visible')
    l.classList.remove('.lightbox_container--hidden')
}

function hide() {
    let l = document.querySelector('#lightbox_container')
    l.classList.add('.lightbox_container--hidden')
    l.classList.remove('lightbox_container--visible')
}

function display_lightbox( data ) {

    let container = document.querySelector('#lightbox_container')
    container.innerHTML = `
    <div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">-X-</p>
        <h1 id="lightbox_title">${data.photo.titre}</h1>
    </div>

    <div id="lightbox-img">
        <img id="lightbox_full_img" src="${config.serveur + data.photo.url.href}">
    </div>
    
    <div id="lightbox-info">
        <h1 id="lightbox-titre">Information de l'image :</h1>
        <br>
        <p>L'id de l'image est : ${data.photo.id}</p>
        <br>
        <p>Le titre de l'image est : ${data.photo.titre}</p>
        <br>
        <p>La description de l'image est : ${data.photo.descr}</p>
        <br>
        <p>Format : ${data.photo.format}</p>
        <br>
        <p>Taille : ${data.photo.size}</p>
        <br>
        <p>File : ${data.photo.file}</p>
        <br>
        <p>Type : ${data.photo.type}</p>
        <br>
        <form action="?id=commentaire" method="post" id="form">
        <fieldset>
           <legend>Ajouter un commentaire</legend> 
           <label for="pseudo">Pseudo</label>
             <input type="text" name="pseudo" id="pseudo" />
           <br />
           <label for="contenu">Commentaire</label>
             <textarea name="contenu" id="contenu" rows="4" cols="4"></textarea> 
           <br />
           <input type="submit" value="Ok" />
        </fieldset>
        </form>
 

       <p>Les commentaires sont :</p>
        <br>
    </div>

</div>`




/*photoloader.fetchURI(config.chemin+'photos/'+data.photo.id +'/comments').then(response => {
    
    response.comments.forEach(element => {
        var res = document.createElement("p");
        res.innerHTML = `${element.pseudo} a envoyé un commentaire qui a pour titre : ${element.titre} <br>Le commentaire est : ${element.content}, et a été envoyé le : ${element.date}<br> <br>`
        document.querySelector('#lightbox-info').appendChild(res)
    });    
})



 * Commentaire
 */


container.querySelector('#lightbox_close').addEventListener('click', e =>{
    console.log('click')
    hide()
})

show()
}


export default {
    display_lightbox
}
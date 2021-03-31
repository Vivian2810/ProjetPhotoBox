import photoloader from './lib/photoloader.js';


let galerie= {};

function load(){
    return photoloader.loadRessource("/www/canals5/photobox/photos");
}

function next() {
    return loadPage(galerie.links.next.href);
}

function previous() {
    return loadPage(galerie.links.prev.href);
}

function first() {
    return loadPage(galerie.links.first.href);
}
function last() {
    return loadPage(galerie.links.last.href);
}
export default {
    load,
    next,
    previous,
    first,
    last
}

/*
let galerie = {}
function loadPage(uri) {
    let pr = photoloader.fetchURI(uri)
    pr.then(gal => {
        galerie = gal
    })   
    return pr    
}
function next() {
  return loadPage(galerie.links.next.href);
}
*/
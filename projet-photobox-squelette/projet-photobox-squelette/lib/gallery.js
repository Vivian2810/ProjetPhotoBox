import photoloader from './lib/photoloader.js';

function load(){
    return photoloader.loadRessource("/www/canals5/photobox/photos");
}

export default {
    load
}
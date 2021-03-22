import lightbox from "./lightbox.js";

var container = document.getElementById("lightbox_container");

function display_lightbox(data){

}

function show(){
    container.className = "lightbox_container--hidden";
}

function hide(){
    container.className = "lightbox_container--visible";
}
let indice = document.getElementById("indice");
let linksContainer = document.getElementById("links-container");
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");

function menu(){
    if(linksContainer.className == "links-none"){
        linksContainer.setAttribute("class","links-container");
    }else {
        linksContainer.setAttribute("class","links-none");
    }
}
indice.onclick = function(){menu();}
link1.onclick = function(){menu();}
link2.onclick = function(){menu();}
link4.onclick = function(){menu();}
link1.onclick = function(){menu();}
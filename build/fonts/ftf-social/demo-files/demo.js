"boxShadow"in document.body.style||document.body.setAttribute("class","noBoxShadow"),document.body.addEventListener("click",function(e){var t=e.target;"INPUT"===t.tagName&&-1===t.getAttribute("class").indexOf("liga")&&t.select()}),function(){function e(){o.innerHTML=d.value||String.fromCharCode(160),window.icomoonLiga&&window.icomoonLiga(o)}function t(){o.style.fontSize=n.value+"px"}var n=document.getElementById("fontSize"),o=document.getElementById("testDrive"),d=document.getElementById("testText");n.addEventListener("change",t,!1),d.addEventListener("input",e,!1),d.addEventListener("change",e,!1),t()}();
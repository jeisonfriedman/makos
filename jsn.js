'use strict';
alert('Jsn');
// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Declaraciones
    const head = document.getElementsByTagName('head')[0];
    const table = document.getElementById('tablepucs');
    const div = document.createElement('div');
    // Si existe la tabla
    if (table) {
        // Creo y agrego link
        div.innerHTML = `<link href="${repUrl}" rel="stylesheet">`;
        head.appendChild(div.children[0]);
    }
    console.log(table);
})
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: ${protocol}<br>`
html += `pathname: ${pathname}<br>`
html += `hostname: ${hostname}<br>`
html += `URL completa: ${href}<br>`

document.write(html);
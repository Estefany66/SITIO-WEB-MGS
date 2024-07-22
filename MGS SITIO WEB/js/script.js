window.onload = function(){
  (function(d, script) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://w.app/widget-v1/nfNmK8.js';
  d.getElementsByTagName('head')[0].appendChild(script);
  }(document));
  };


document.getElementById('downloadButton').addEventListener('click', function() {
    // Cambia la URL al archivo PDF que quieres descargar
    var pdfUrl = 'ISO9001-MGS.pdf';
    // Crear un elemento <a> temporal para iniciar la descarga
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'archivo.pdf'; // Nombre del archivo PDF cuando se descargue
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
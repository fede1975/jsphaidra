$(document).ready(function () {
  $('#getDC').click(function () {
    var mostradati = $('#mostraDC');

    $.getJSON('61439.json', function (data) {
      console.log(data);

      var campi = data.dc.map(function (campo) {
        return campo.ui_value + ': ' + campo.xmlname;
      });

      mostradati.empty();

      if (campi.length) {
        var contenuto = '<li>' + campi.join('</li><li>') + '</li>';
        var lista = $('<ul />').html(contenuto);
        mostradati.append(lista);
      }
    });

    mostradati.text('caricamento DC oggetto');
  });
});

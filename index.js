// The Hex to RGBA function
(function (window) {
  'use strict';
  if ('undefined' !== typeof window.hexToRgba) {
    return;
  }
  // This is a *functional* not *fancy* implementation
  var hexToRgba = function (hex) {
    var r,
      g,
      b,
      a;
    hex = hex.replace('0x', '');
    if (8 === hex.length) {
      r = hex.substring(0, 2);
      g = hex.substring(2, 4);
      b = hex.substring(4, 6);
      a = hex.substring(6, 8);
    } else {
      return '';
    }
    if ('undefined' === typeof a) {
      a = 'ff';
    }
    if (1 === r.length) {
      r += r;
    }
    if (1 === g.length) {
      g += g;
    }
    if (1 === b.length) {
      b += b;
    }
    if (1 === a.length) {
      a += a;
    }
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    a = parseInt(a, 16);
    return '( ' + r + ' , ' + g + ' , ' + b + ' , ' + a + ' )';
  }
  window.hexToRgba = hexToRgba;
})(window);

// Do the testing
$(function () {
  'use strict';
  var test = $('#go').click(function () {
    var examples = document.querySelectorAll('[data-background-color-hex-to-rgba]'),
      example,
      hex,
      rgba;
    for (var i = 0; i < examples.length; ++i) {
      example = examples[i];
      hex = example.getAttribute('data-background-color-hex-to-rgba');
      rgba = hexToRgba(hex);
      console.log(' rgba: ' + rgba);
      example.children[0].innerText = rgba;
    }
    $('p b').text(hexToRgba($('#hex').val()));
  });
  document.addEventListener('DOMContentLoaded', test);
})();

function changeHeights() {
  var elem1 = document.getElementById("pe");
  var elem2 = document.getElementById("ke");
  var elem1h = 400;
  var elem2h = 0;
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 14) {
      clearInterval(id);
    } else {
      pos++;
      elem1h -= pos;
      elem2h += pos;
      elem1.style.height = elem1h + 'px';
      elem2.style.height = elem2h + 'px';
    }
  }
}


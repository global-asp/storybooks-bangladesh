document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].currentTime = 0;
      audios[i].pause();
    }
  }
}, true);

function playpause(n) {
  p = document.getElementById('audio' + n);
  if (p.paused) {
    p.play();
  } else {
    p.pause();
  }
}

function switchlang(d,l) {
  bn = document.getElementsByClassName("bn");
  en = document.getElementsByClassName("en");
  def = document.getElementsByClassName("def");
  btn_bn = document.getElementsByClassName("lang-bn");
  btn_en = document.getElementsByClassName("lang-en");
  if (l == "bn") {
    for (var i = 0; i < btn_bn.length + 1; i++) {
      en[i].style.display = "none";
      bn[i].style.display = "block";
      def[i].style.display = "none";
      btn_bn[i].innerHTML = d;
      btn_en[i].innerHTML = "en";
      btn_bn[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','en')");
    }
  } else if (l == "en") {
    for (var i = 0; i < btn_en.length + 1; i++) {
      bn[i].style.display = "none";
      en[i].style.display = "block";
      def[i].style.display = "none";
      btn_bn[i].innerHTML = "bn";
      btn_en[i].innerHTML = d;
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_bn[i].setAttribute("onclick", "switchlang('" + d + "','bn')");
    }
  } else if (l == d) {
    for (var i = 0; i < btn_en.length + 1; i++) {
      bn[i].style.display = "none";
      en[i].style.display = "none";
      def[i].style.display = "block";
      btn_bn[i].innerHTML = "bn";
      btn_en[i].innerHTML = "en";
      btn_bn[i].setAttribute("onclick", "switchlang('" + d + "','bn')");
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','en')");
    }
  }
}

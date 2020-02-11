
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://workingpanda.github.io/antikviteti/nav.html', true);
xhr.onreadystatechange = function () {
   if (this.readyState !== 4) return;
   if (this.status !== 200) return; // or whatever error handling you want
   document.getElementById('n').innerHTML = this.responseText;
};
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://workingpanda.github.io/antikviteti/foot.html', true);
xhr.onreadystatechange = function () {
   if (this.readyState !== 4) return;
   if (this.status !== 200) return; // or whatever error handling you want
   document.getElementById('f').innerHTML = this.responseText;
};
xhr.send();


console.log("hi");
const toogle = document.getElementById("toogle");
const body = document.querySelector("body");
const jumbo = document.getElementsByClassName("navbar");

toogle.addEventListener("click", () => {
    var img_toogle = toogle.querySelector("img");
    if (body.classList.contains("c-light")){
        img_toogle.src = "images/moon.png";
        body.classList.remove("c-light");
        body.classList.add("c-dark");
        for (var i = 0; i < jumbo.length; i++) {
            jumbo[i].style.backgroundColor = '#264653';
            jumbo[i].style.color = "#FEFAE0";
        }
    }else{
        img_toogle.src = "images/sun.png";
        body.classList.add("c-light");
        body.classList.remove("c-dark");
        for (var i = 0; i < jumbo.length; i++) {
            jumbo[i].style.backgroundColor = "#FEFAE0";
            jumbo[i].style.color = '#264653';
        }
    }
});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.innerHTML = ".typewrite > .wrap { border-right: 0.15em solid #E76F51}";
  
  document.body.appendChild(css);
};


var active_btn = document.getElementsByClassName("btn");
var portfolio_slider = document.getElementById("portfolio_slider");

active_btn[0].onclick = function () {
  portfolio_slider.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    active_btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

active_btn[1].onclick = function () {
  portfolio_slider.style.transform = "translateX(-800px)";
  for (i = 0; i < 4; i++) {
    active_btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

active_btn[2].onclick = function () {
  portfolio_slider.style.transform = "translateX(-1600px)";
  for (i = 0; i < 4; i++) {
    active_btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

active_btn[3].onclick = function () {
  portfolio_slider.style.transform = "translateX(-2400px)";
  for (i = 0; i < 4; i++) {
    active_btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

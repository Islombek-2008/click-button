let sonlar = document.getElementById("sonlar");
let plass = document.getElementById("plass");
let clear = document.getElementById("clear");
let audio = new Audio();
audio.src = "./click.mp3";

let res = 0;

plass.addEventListener("click", function () {
  res++;
  sonlar.innerHTML = res;
});

clear.addEventListener("click", function () {
  res = 0;
  sonlar.innerHTML = res;
});

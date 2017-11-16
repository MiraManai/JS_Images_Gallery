var displayedImage = document.querySelector('.displayed-img')
var thumbBar = document.querySelector('.thumb-bar')

var btn = document.querySelector('button')
var overlay = document.querySelector('.overlay')

var clickHandler = function (event) {
  var targetSrc = event.target.getAttribute('src')
  displayedImage.setAttribute('src', targetSrc)
}

var onClickHandler = function (event1) {
  var getClass = event1.target.getAttribute('class')
  console.log(getClass)

  if (getClass === 'dark') {
    btn.setAttribute('class', 'light')
    btn.textContent = 'Darken'
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  } else {
    btn.setAttribute('class', 'dark')
    btn.textContent = 'Lighten'
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
  }
}

btn.onclick = onClickHandler

/*
btn.setAttribute('class', "dark");
btn.textContent = "Lighten";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

btn.setAttribute('class', "light");
btn.textContent = "Darken";
overlay.style.backgroundColor = "rgba(0,0,0,0)";
*/

/* Looping through images */
for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img')
  newImage.setAttribute('src', 'images/pic' + i + '.jpg')
  thumbBar.appendChild(newImage)

  newImage.onclick = clickHandler
}

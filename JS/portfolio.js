var x = document.getElementById('projOverlay1');

document.getElementById('preview1').onclick = function showPreview1() {
  if (x.style.display === 'none') {
      x.style.display = 'block';
} else {
      x.style.display = 'none';
}
}

document.getElementById('greyBox').onclick = function hidePreview1() {
  if (x.style.display === 'block') {
      x.style.display = 'none';
  } else {
      x.style.display = 'block';
  }
}
/*
function showPreview1() {
  var openpop1 = document.getElementById('projOverlay1');
  if (openpop1.style.display === 'none') {
      openpop1.style.display = 'block';
} else {
      openpop1.style.display = 'none';
}
}
*/

/*function hidePreview1() {
  if (popup1.style.dislay === 'block') {
  popup1.style.display = 'none');
} else {
  popup1.style.display = 'block';
}
}
*/

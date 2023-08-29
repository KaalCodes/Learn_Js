var changeclr = document.getElementById('outer-box');
var changeShp = document.getElementById('inner-box');
function changeColor(){
   changeclr.style.backgroundColor = 'cyan';
}
color.addEventListener('click',changeColor);




function changeShape(){
   changeShp.style.borderRadius = '100px';
}
shape.addEventListener('click',changeShape);
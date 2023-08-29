
var box = document.getElementById('box1');
var clickCount = document.getElementById('click-count');
function check(){
    "use strict " //Use within function only
    count ++;
    console.log(count);
    clickCount.innerText = count +" "
}

count = 0;
box.addEventListener('click', check);

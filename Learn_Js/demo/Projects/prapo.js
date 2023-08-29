var outer = document.getElementById('outer');
outer.addEventListener('click',function(){
    console.log('Outer div Clicked!!');
});

var inner = document.getElementById('inner');
inner.addEventListener('click',function(event){
    event.stopPropagation();
    console.log('inner div Clicked!!');
});
function greet(){
    alert("Namaste Bharat!!");
}

function bye(){
    alert("Ram Ji Bhla Kare!!");
}

var helloButton = document.getElementById('btn1');
helloButton.addEventListener('click', greet);
// Second Event Add
helloButton.addEventListener('click', bye);
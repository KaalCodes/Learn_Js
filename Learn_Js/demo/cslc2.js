var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var oprend1 = 0;
var oprend2 = null;
var operator = null;
for (var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '+'){
            operator = '+';
            oprend1 = parseFloat(display.textContent);
        }
        else if(value == '='){
            oprend2 = parseFloat(display.textContent);
            // var result = eval (oprend1+ " "+ operator+ " "+ oprend2);
            var result =  eval(oprend1+operator+oprend2)
            console.log(result);
        }

        else{
            display.innerText += value;
        }
    });
}
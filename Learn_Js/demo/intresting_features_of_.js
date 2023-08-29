// let use in for loop
for (let i=0; i<=10; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000);
}

//----> for of loop(use for itrate array elements in shortcut method)
arr = [10,20,30,40];
for (let i of arr){
    console.log(i);
}

/*for Scroll window using two functions:-
window.scrollTo(x-axis, y-axis value in pixels)
window.scrollBy(x-axis, y-axis value in pixels)---> using for steps
*/
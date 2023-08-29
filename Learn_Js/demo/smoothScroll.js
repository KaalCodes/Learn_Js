// var educationId = 
// document.getElementById('education');
// For Getting Input Item From Navbar
var navMenuTags = document.querySelectorAll('.nav a');
var interval;

for (var i = 0; i < navMenuTags.length; i++){
    navMenuTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log( targetSection); for fetching section id
         interval = setInterval(scrollVertically, 20, targetSection);
    });
}

    // target section has local scope thats why pass as argument at above
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.top <= 0 ){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
}


// var targetPos = 0;
// var currentPos = 0;
// var scrollInterval = 
// setInterval(function(){
//     if (currentPos >= targetPos){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currentPos += 50;
//     window.scrollBy(0,50);
// }, 50);

// Use function for prevent default behaviour of anchor tag
// Section.addEventListener('click', function(event){
//     event.preventDefault();
// });


// function use for finding cordinates---> this asumme every element is rectangle form
// var cordinates = educationId.getBoundingClientRect();
// console.log(cordinates);
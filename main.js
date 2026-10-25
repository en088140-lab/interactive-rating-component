var submitButton=document.querySelector(".btn button");
var ratingButtons=document.querySelectorAll(".btn2");
var ratingText=document.querySelector(".container2 h4");
var selectedRating=0;
ratingButtons.forEach( function(button) {
    button.addEventListener("click", function(){
        selectedRating=button.textContent;
    ratingButtons.forEach( function(btn) { 
        btn.classList.remove('selected') 
     });
        button.classList.add('selected');
    });
});
submitButton.addEventListener("click",function(){
    if(selectedRating===0){
        alert("please select a rating");
        return;
    }
   document.querySelector(".big-container").style.display="none"
   document.querySelector(".big-container2").style.display="flex"
   ratingText.textContent="you selected" +" " +selectedRating +" "+ "out of 5";

});
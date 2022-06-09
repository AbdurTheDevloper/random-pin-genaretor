// random number genaretore start here 
var genaratorBtn = document.querySelector(".generate-btn");
var pinInput = document.getElementById('pin-input');

genaratorBtn.addEventListener("click", function(){
    var randomNumber = Math.round(Math.random() * 10000 + 5000); 
    pinInput.value = randomNumber;
})



// calc-body ‍start here
let inputValue = document.querySelector('#dial-pad');
let buttons = document.querySelectorAll(".button");

for(var i=0; i<buttons.length; i++){
 buttons[i].addEventListener('click', function(){
    inputValue.value += this.innerHTML;

 })
};

// submit button start here 

let wrongKEy = document.getElementById('wrongKEy');
let rightKey = document.getElementById('rightKey');

let submitBtn = document.querySelector('.submit-btn');

wrongKEy.style.display= 'none';
rightKey.style.display = 'none';

submitBtn.addEventListener('click', function(){
   let genaretPin =  pinInput.value;
   
   if(genaretPin!==inputValue.value){
    wrongKEy.style.display= 'block';
    rightKey.style.display = 'none';
    
   }else{
    rightKey.style.display = 'block';
    wrongKEy.style.display= 'none';
   }
   
});

// close right part 
let hero = document.querySelector('.hero');
hero.style.display = 'none';
rightKey.addEventListener('click', function(){
    hero.style.display = 'block';
});


let flowerClose = document.getElementById('flowerClose');
flowerClose.addEventListener('click', function(){
    hero.style.display = ' none ';
})
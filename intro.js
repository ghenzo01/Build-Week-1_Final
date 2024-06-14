
let button = document.querySelector(".rules");
let mainCheck = document.getElementById('mainCheck')
console.log(mainCheck);


mainCheck.addEventListener('change',function(){
button.disabled = !mainCheck.checked;


})
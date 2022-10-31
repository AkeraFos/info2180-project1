/* Add your JavaScript to this file */
window.addEventListener('load', function(){
 

  const $email = document.getElementById('email');
  const $submit_form = document.getElementByTagName('button');
  const $msg = document.querySelector('.message');

  $submit_form.addEventListener('click', function(e){
    e.preventDefault();
    let email= email.value;

    if(email=== ''){
      $msg.innerHTML= "Please enter a valid email address.";
    }
    else{
      $msg.innerHTML = "Thank you! Your email address"+$email.value;
      $email.value = '';
    }
      
  });

});

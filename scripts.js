/* Add your JavaScript to this file */
window.onload = function(){
 

  const $email = document.getElementById('email');
  const $submit_form = document.getElementByTagName('button')[0];
  const $msg = document.getElementByClassName('message')[0];

  $submit_form.addEventListener('click', (e) => {
    e.preventDefault();

    $email.value=== null|| $email.value === "" ? $msg.textContent = "Please enter a valid email address." : 

    $msg.textContent = "Thank you! Your email address"+$email.value;
  })

}


 //variable declaration
 let form =  document.forms.form;
 let formSubmitBtn =  document.getElementById('submit-btn');
 let formSubmitBtnDiv =  document.getElementById('contact-btn');
 let deliveryMessage =  document.getElementById('deliveryMessage');
 let labels = document.getElementsByTagName("label");
 let date = new Date();
 let hours = date.getHours();

 if (hours > 19 || hours < 6) {
     // If time is after 7PM or before 6AM, apply night theme to ‘body’
     document.body.classList.add("night");
     document.getElementById('sun').style.display = 'none';
     for (let i = 0; i < labels.length; i++) {
         labels[i].classList.add("night-label-color");
     }

 }
 else if (hours > 16 && hours < 19) {
     // If time is between 4PM – 7PM sunset theme to ‘body’
     document.body.classList.add("sunset");
     document.getElementById('moon').style.display = 'none';

 }
 else {
     // Else use ‘day’ theme
     document.body.classList.add("day");
     document.getElementById('moon').style.display = 'none';

 }

//listen for onsubmit EVENT...
 form.onsubmit = proccessForm;

 //this function handles form validation
 function proccessForm(){

  //access the form elements
  let name = form.name;
  let email = form.email;
  let subject = form.subject;
  let message = form.message;

  //validate form input fields
   if(name.value === "" || name.value === null){

      name.style.background = "red";

      name.style.color = "white";

      name.focus();

      return false;
   }

   if(email.value === '' || email.value === null ){

      email.style.background = "red";

      email.style.color = "white";

      email.focus();

      return false;
   }
   if(subject.value === "" || subject.value === null){

      subject.style.background = "red";

      subject.style.color = "white";

      subject.focus();

      return false;
   }

   if(message.value === '' || message.value === null ){

      message.style.background = "red";

      message.style.color = "white";

      message.focus();

      return false;
   }

   setTimeout(hide, 500);

   return false;

 }

 //function to hide submit button and apply animation
 function hide(){
     formSubmitBtn.style.display = 'none';
     formSubmitBtnDiv.innerHTML = '<i class="fa-regular fa-envelope float-md-start mb-3 text-primary fs-1"></i>'
     formSubmitBtnDiv.classList.add('play');
     setTimeout(hideMailIcon, 4000);
 }
 //function to hide mail icon once it moves for  4s
 function hideMailIcon(){
     formSubmitBtnDiv.style.display = 'none';
     formSubmitBtnDiv.classList.add('pause');
     form.style.display = 'none';
     deliveryMessage.style.display = 'block';

 }


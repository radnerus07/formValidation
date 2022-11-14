const formName = document.getElementById('namefeilds')
const formSname = document.getElementById('snamefeilds')
const formEmail = document.getElementById('emailfeilds')
const formMobile = document.getElementById('mobilefeilds')
const formPassword = document.getElementById('passwordfeilds')
const fName = document.getElementById('fname')
const surName = document.getElementById('surname')
const mobileNumber = document.getElementById('mobilenumber')
const password = document.getElementById('password')
const email = document.getElementById('email')
const submitBtn = document.getElementById('submit')
// var error_fname = false;
// var error_sname = false;
// var error_email = false;
// var error_password = false;
// var error_mobile= false;
// function isEmail(email) {
// 	return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
// }

function isName(fName) {
    return /^[A-Za-z]+$/.test(fName);
}
function isSurName(surName) {
  return /^[A-Za-z]+$/.test(surName);
}



//...................validation...........................................



function checkFname() {
  var error_fname = false;
  const fNameValue = fName.value.trim();
  var Fnformat = /^[A-Za-z]+$/;
  if(fNameValue.match(Fnformat)) {
    fName.style.borderColor = 'green';
    formName.classList.remove('fnerror')
  } else {
    fName.style.borderColor = 'red';
    formName.classList.add('fnerror')
    error_fname = true;
      
  }
}

function checkSname() {
  var error_sname = false;
  const surNameValue = surName.value.trim();
  var Snformat = /^[A-Za-z]+$/;
  if(surNameValue.match(Snformat)) {
    surName.style.borderColor = 'green';
    formSname.classList.remove('snerror')   
   }else {
    surName.style.borderColor = 'red';
    formSname.classList.add('snerror')
    error_sname = true;
   }
}

function checkEmail() {
  var error_email = false;
  const emailValue = email.value.trim();
  var Emformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailValue.match(Emformat)) {
    email.style.borderColor = 'green';
    formEmail.classList.remove('emailerror')
       return true;
  }else {
    email.style.borderColor = 'red';
      formEmail.classList.add('emailerror') 
      error_email = true;
     
  } 
}

function checkPnumber() {
  var error_password = false;
  var Mpattern =/^\d{10}$/;
  const mobileNumberValue = mobileNumber.value.trim();
  if (mobileNumberValue .match(Mpattern)){
    mobileNumber.style.borderColor = 'green';
    formMobile.classList.remove('pherror')
       return true;
   }else {
    mobileNumber.style.borderColor = 'red';
    formMobile.classList.add('pherror')
    error_mobile= true;
   
   }
}

function CheckPassword() {
  var error_password = false;
  const passwordValue = password.value.trim();
  if (passwordValue .length <= 6 ){
    password.style.borderColor = 'red';
    formPassword.classList.add('passerror')
    error_password = true;
      
   }else {
    password.style.borderColor = 'green';
    formPassword.classList.remove('passerror')
    
   }
}

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
  error_fname = false;
  error_sname = false;
  error_email = false;
  error_password = false;
  error_mobile = false;
  
  checkFname();
  checkSname();
  checkEmail();
  checkPnumber();
  CheckPassword();



  if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_mobile=== false) {
    swal("Good job!", "login successful!", "success");
    return true;
    
 } else {
  swal("wrong input!", "please fill the form correctly!", "error");
    return false;
 }
}










// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// if($('#fname').val()== ''){
//   $('#fname').css('border-color', 'red');
// } else {
//   $('#fname').css('border-color', 'green');
// }



// function checkInputs() {
//   const fNameValue = fName.value.trim();
//   const surNameValue = surName.value.trim();
//   const mobileNumberValue = mobileNumber.value.trim();
//   const passwordValue = password.value.trim();
//   const emailValue = email.value.trim();

  
// if(fNameValue === '' || (!isName(fNameValue))) {
//   fName.style.borderColor = 'red';
//   formName.classList.add('fnerror')
//      return false;
// } else {
//   fName.style.borderColor = 'green';
//   formName.classList.remove('fnerror')
// }
// // else if (!isName(fNameValue)){
// //   fName.style.borderColor = 'red';
// //     return false;
// // }console.log(fNameValue);

// if(surNameValue === '' || (!isSurName(surNameValue))) {
//  surName.style.borderColor = 'red';
//  formSname.classList.add('snerror')
//      return false;
// }else {
//   surName.style.borderColor = 'green';
//   formSname.classList.remove('snerror')
// }

// if(emailValue === '' || (!isEmail(email))) {
//   email.style.borderColor = 'red';
//   formEmail.classList.add('emailerror')
//      return false;
// }else {
//   email.style.borderColor = 'green';
//     formEmail.classList.remove('emailerror') 
// } 

// if(mobileNumberValue === '' ) {
//   mobileNumber.style.borderColor = 'red';
//   formMobile.classList.add('pherror')
//      return false;
// } else{
//   mobileNumber.style.borderColor = 'green';
//   formMobile.classList.remove('pherror')
// }

// if (passwordValue === ''){
//   password.style.borderColor = 'red';
//   formMobile.classList.add('passerror')
//      return false;
//  }else {
//   password.style.borderColor = 'green';
//   formMobile.classList.remove('passerror')
//  }
  

// }





// alertbox


// submitBtn.addEventListener('click', (e) => {
//     if (fName.value === '' || fName.value == null) {
//         alert('Name is required')
       
//     } 
//     if (surName.value === '' || surName.value == null) {
//         alert('SurName is required')
    
//     }
//     if (email.validity.patternMismatch) {
//         email.style.borderColor = "red";
//         alert("you have entered an invalid email - eg. bob@gmail.com");
        
//       }

//     if (mobileNumber.value === '' || mobileNumber.value.length < 10) {
//         alert("Please enter a valid number")
    
//     }
//     // if (mobileNumber.value === '' || mobileNumber.value.length > 10) {
//     //     alert("number should not be more than 10 digits")
//     // }
//     if (password.value.length <= 6){
//         alert('Password must be longer than 6 characters')
        
//     }
//     // if (password.value === 'password') {
//     //     alert ('password cannot be password')
//     //     password.style.borderColor = 'red';
//     // }
//     else {
//         alert('login succesful')
        
        
        
//     }
// })



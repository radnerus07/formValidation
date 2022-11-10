// const formName = document.getElementById('namefeilds')
// const formSname = document.getElementById('snamefeilds')
// const formEmail = document.getElementById('emailfeilds')
// const formPassword = document.getElementById('passwordfeilds')
const fName = document.getElementById('fname')
const surName = document.getElementById('surname')
const mobileNumber = document.getElementById('mobilenumber')
const password = document.getElementById('password')
const email = document.getElementById('email')
const submitBtn = document.getElementById('submit')


// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

function checkInputs() {
  const fNameValue = fName.value.trim();
  const surNameValue = surName.value.trim();
  const mobileNumberValue = mobileNumber.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  var letters = /^[A-Za-z]+$/;

if(fNameValue === '') {
    alert('Name cannot be blank');
     return false;
} else if (!isName(fNameValue)){
    alert('fistname should only have alphabet');
    return false;
}

if(surNameValue === '') {
    alert('surname cannot be blank');
     return false;
}

if(emailValue === '') {
    alert('Email cannot be blank');
     return false;
} else if (!isEmail(emailValue)) {
    alert('Not a valid email');
     return false;
} 

if(mobileNumberValue === '' || mobileNumberValue.length < 10) {
    alert('Number should have minimum 10 digits');
     return false;
} 
if(mobileNumberValue === '' || mobileNumberValue.length > 10) {
    alert('Number should have maximum 10 digits');
     return false;
} 

if (passwordValue .length <= 6){
    alert('Password must be longer than 6 characters');
     return false;
 }

else {
    alert('login successful');
    return true;
}
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(fName) {
    return /^[A-Za-z]+$/.test(fName);
}



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



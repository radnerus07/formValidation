const formName = document.getElementById('namefeilds')
const formSname = document.getElementById('snamefeilds')
const formEmail = document.getElementById('emailfeilds')
const formPassword = document.getElementById('passwordfeilds')
const fName = document.getElementById('fname')
const surName = document.getElementById('surname')
const mobileNumber = document.getElementById('mobilenumber')
const password = document.getElementById('password')
const email = document.getElementById('email')
const submitBtn = document.getElementById('submit')




submitBtn.addEventListener('click', (e) => {
    if (fName.value === '' || fName.value == null) {
        alert('Name is required')
       
    } 
    if (surName.value === '' || surName.value == null) {
        alert('SurName is required')
    
    }
    if (email.value === '' || email.value == null) {
        alert('email is required')
    } 
    if (mobileNumber.value === '' || mobileNumber.value.length < 10) {
        alert("Please enter a valid number")
        mobi
    }
    // if (mobileNumber.value === '' || mobileNumber.value.length > 10) {
    //     alert("number should not be more than 10 digits")
    // }
    if (password.value.length <= 6){
        alert('Password must be longer than 6 characters')
        
    }
    // if (password.value === 'password') {
    //     alert ('password cannot be password')
    //     password.style.borderColor = 'red';
    // }
    else {
        alert('login succesful')
        
        
        
    }
})


// function checkInputs(){
//     const fNameValue = fName.value.trim();
//     const surNameValue = surName.value;
//     const mobileNumberValue = mobileNumber.value;
//     const passwordValue = password.value;
//     const emailValue = email.value;

//     if(fNameValue === ''){
//         setErrorFor(fName, 'username cannot be blank');
//     }else{
//         setSuccessFor(fName)
//     }

// }

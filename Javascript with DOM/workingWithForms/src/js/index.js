 
//We use the name values the select the value and manipulate them


const formEl = document.querySelector('form');
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullnameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

//We need to validate each form field and ensure that all of them are filled in
//For individual form fields lets create a centralised flag
let canSubmit = false;
//As long as this is false we will ensure that the form is not submitted

const submitForm = (data) => {
    console.log(data);
}
//Validators

const validateFld = (el,condition) =>{
    if(condition){
        canSubmit = true;
        el.parentElement.classList.remove('form-field-error');
    }
    else{
        canSubmit = false;
        //to show the problem and provide visual feedback, we will goto the parent node
        el.parentElement.classList.add('form-field-error');
    }
};

emailFld.addEventListener('keyup',function(evt) {
    evt.preventDefault();
    // this built in method uses the form fields type and uses built validators to return a boolean value         
        validateFld(this,evt.target.reportValidity());
    }
);

passwordFld.addEventListener('keyup',function(evt) {
    evt.preventDefault();
    validateFld(this, passwordRegEx.test(evt.target.value));
});

repasswordFld.add('keyup', function(evt) {
    evt.preventDefault();
    validateFld(this, passwordFld.value === evt.target.value);
});

fullnameFld.addEventListener('keyup',function(evt) {
    evt.preventDefault();
    //It mandatory for the name to have a length of the name to be atleast 2 
    //But inorder to ignore the white spaces we can use
    evt.target.value = evt.target.value.trimLeft();
    validateFld(this,evt.target.reportValidity());
    
});


//Now, we move on to individual field validators
formEl.addEventListener('submit',function(evt){
    evt .preventDefault();
    //This prevents the browser from handling the form and lets us to hijack the form and take control

    const getFormValues = [...evt.target.elements]
    .filter((el) => el.type !== 'submit' && el)
    .map((el) =>{
        return{
            name: el.getAttribute('name'),
            type: el.type,
            value: el.type === 'checkbox' ? el.checked: el.value,
         };
    });

    //Check if all the details are filled, we don't need to check checkbox as it is not mandatory
    const isFlled = getFormValues
    .filter((el) => el.type !== 'checkbox')
    .every((el => el) !== '');

    isFilled && canSubmit && submitForm(getFormValues);
});

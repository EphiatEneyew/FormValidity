import useForm from "../hooks/use-form";
const BasicForm = (props) => {

const {enteredValueChangeHandler: NameChangeHandler,
  isValid: nameIsValid,
  enteredValue: enteredNameValue,
  inputBlurHandler: nameInputBlurHandler,
  isInvalid: nameInputHasError,
  setReset: reset
} = useForm( value => value.trim() !== '');

const {enteredValueChangeHandler: LNameChangeHandler,
  isValid: lnameIsValid,
  enteredValue: enteredLNameValue,
  inputBlurHandler: lnameInputBlurHandler,
  isInvalid: lnameInputHasError,
  setReset: resetLastName
} = useForm( value => value.trim() !== '');

const {enteredValueChangeHandler: emailChangeHandler,
  isValid: emailIsValid,
  enteredValue: enteredEmailValue,
  inputBlurHandler: emailInputBlurHandler,
  isInvalid: emailInputHasError,
  setReset: resetEmail
} = useForm( value => value.includes('@'));

let formIsValid = false;

if (nameIsValid && lnameIsValid && emailIsValid) {
  formIsValid = true;
}


const submitEvettHandler = event =>{
 event.preventDefault();
  
  if (!formIsValid) {
    return;
  }

  console.log('submmited')
  console.log(enteredNameValue, enteredLNameValue, enteredEmailValue);

  reset();
  resetLastName();
  resetEmail();

}


  return (
    <form onSubmit={submitEvettHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text'
           id='name'
           onChange={NameChangeHandler} 
           onBlur={nameInputBlurHandler}
           value={enteredNameValue}
           />
           {nameInputHasError && <p>Name must not be empity</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text'
           id='name'
           onChange={LNameChangeHandler} 
           onBlur={lnameInputBlurHandler}
           value={enteredLNameValue}
           />
           {lnameInputHasError && <p>Name must not be empity</p>} </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' 
        onChange={emailChangeHandler} 
        onBlur={emailInputBlurHandler}
        value={enteredEmailValue} />
        {emailInputHasError && <p>Please enter valid E-Mail</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

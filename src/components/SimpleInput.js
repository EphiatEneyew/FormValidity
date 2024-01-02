//Fetching the user input (entered value).there are two ways to do that(using useState and useRef).
//Listen every key strock and store the value in some state variable.or we use a ref to fetch the input once the user is done typing in value

import useInput from '../hooks/use-input';
const SimpleInput = (props) => {

  const {value: enteredName,
         touchedHandler: nameTouchedHandler,
         valueIsValid:nameIsValid,
         hasError: nameInputHasError,
         valueChangeHandler: nameChangeHandler,
         inputBlureHandler: nameBlurHandler,
         reset: resetNameInput,
         terminate: terminateNameExecution
        } = useInput(value => value.trim() !== '');
  
        const {value: enteredEmail,
          valueIsValid:emailIsValid,
          touchedHandler: emailTouchedHandler,
          hasError: emailInputHasError,
          valueChangeHandler: emailChangeHandler,
          inputBlureHandler: emailBlurHandler,
          reset: resetEmailInput,
          terminate: terminateEmailExecution
         } = useInput(value => value.includes('@'));
  

 const formSubmissionHandler = event => {
    event.preventDefault();/*to prevent the default behavior of the browser which happen when the form is subbmitted.this default behavior is sending HTTPrequast to the server(the browser does that automatically).
                          //but now we have not server that wants to do anythingwith that request.we only have static server ehic serves our JavaScript and HTML files so we don't want to send this requast.
                          b/c if HTTP requast would be sent it would lead to the page being reloaded in the end,the entire application restart(we lost our state variable).*/
                          
    nameTouchedHandler();                    
    terminateNameExecution(nameIsValid);

    emailTouchedHandler();
    terminateEmailExecution(emailIsValid,);
   
    console.log(enteredName);  
   
   
    //nameInputRef.current.value= '';=> NOT IDEAL, DON'T MANUPLATE THE DOM
    resetNameInput();

    resetEmailInput();
    
}

  
  const emailInputClass = emailInputHasError ? 'form-control invalid' : 'form-control ';
  const nameInputClass = nameInputHasError ? 'form-control invalid' : 'form-control ';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
                type='text'
                 id='name' 
                 onChange={nameChangeHandler}
                 onBlur={nameBlurHandler}//built in event which fires when the input looses focus
                 value={enteredName} />
      {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>Your E-Mail</label>
        <input 
                type='email'
                 id='email' 
                 onChange={emailChangeHandler}
                 onBlur={emailBlurHandler}//built in event which fires when the input looses focus
                 value={enteredEmail} />
      {emailInputHasError && <p className='error-text'>please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

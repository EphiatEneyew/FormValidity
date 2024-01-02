//keep in mind that the hook (and custom hooks in general) should be generic - it`s not limited to one specific input!
import { useState } from "react";
const useInput = (validateValue) => {
 const [enteredValue, setEnteredValue]=useState(''); 
 const [isTouched, setIsTouched]=useState(false);

 const valueIsValid = validateValue(enteredValue);
 const hasError = !valueIsValid && isTouched;

 const valueChangeHandler = event=> {
    setEnteredValue(event.target.value);//such state update is scheduled by the react and it is not execute immidiatly
       };

 const inputBlureHandler = event=>{
    setIsTouched(true);
         };
const touchedHandler = () => {
    setIsTouched(true);
}
 const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
 }

 const terminate = () =>{
    if (!valueIsValid) {
        return;
    }
 }
 
 return {
    value: enteredValue, 
   
    hasError, 
    valueChangeHandler, 
    inputBlureHandler,
    reset,
    terminate,
    valueIsValid,
    touchedHandler
 };
};
export default useInput;
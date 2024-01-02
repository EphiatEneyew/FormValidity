import { useState } from "react";
const useForm = (checkValidity) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState (false);

    const isValid = checkValidity(enteredValue);
    const isInvalid = !isValid && isTouched;

    const enteredValueChangeHandler = (event) =>{
    setEnteredValue(event.target.value);
}

const inputBlurHandler = event =>{
    setIsTouched(true);
}

const isTouchedChangeHandler =() =>{
    setIsTouched(true);
}

const stop=(isValid) => {
    if (!isValid){
    return;
  }
}

const setReset = () => {
    setEnteredValue('');
    setIsTouched(false);

}

return {
    enteredValueChangeHandler,
    enteredValue,
    inputBlurHandler,
    isInvalid,
    isTouchedChangeHandler,
    stop,
    setReset,
    isValid


}
};
export default useForm;
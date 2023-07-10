import React from "react";
import styled from './Adress.module.css'
import useForm from "../../hooks/use-form";
import { useDispatch } from "react-redux";
import { dataAction } from "../store/data";
const Adress = () => {
    const dispatch = useDispatch()

    //Check all 6 inputs
    const {
        value: enteredFirstName,
        isValid: firstNameIsValid,
        hasError: firstNameIsInvalid,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameInputBlur,
        resetInputHandler: firstNameReset,
    } = useForm((value) => value.length > 0);
    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameIsInvalid,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameInputBlur,
        resetInputHandler: lastNameReset,
    } = useForm((value) => value.length > 0);
    const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityIsInvalid,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityInputBlur,
        resetInputHandler: cityReset,
    } = useForm((value) => value.length > 0);
    const {
        value: enteredZip,
        isValid: zipIsValid,
        hasError: zipIsInvalid,
        valueChangeHandler: zipChangeHandler,
        inputBlurHandler: zipInputBlur,
        resetInputHandler: zipReset,
    } = useForm((value) => value.length > 0);
    const {
        value: enteredAdress,
        isValid: adressIsValid,
        hasError: adressIsInvalid,
        valueChangeHandler: adressChangeHandler,
        inputBlurHandler: adressInputBlur,
        resetInputHandler: adressReset,
    } = useForm((value) => value.length > 0);
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailIsInvalid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlur,
        resetInputHandler: emailReset,
    } = useForm((value) => value.includes("@"));

    const formIsInvalid = !firstNameIsValid || !lastNameIsValid || !cityIsValid || !zipIsValid || !adressIsValid || !emailIsValid

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formIsInvalid) {
            alert("Order confirmed")
            dispatch(dataAction.toggleOrderConfirmed())
            dispatch(dataAction.toggleAdress())
            dispatch(dataAction.toggleCart())
            dispatch(dataAction.resetCart())
            firstNameReset()
            lastNameReset()
            cityReset()
            zipReset()
            adressReset()
            emailReset()
        }
    }
    return (
        <div className={styled.container}>
            <form onSubmit={handleSubmit}>
                <div className={styled.adress}>

                    <input type="text" placeholder={'First name'} onBlur={firstNameInputBlur} value={enteredFirstName} onChange={firstNameChangeHandler} ></input>
                    {firstNameIsInvalid && <p>Need to type something! </p>}
                    <input type="text" placeholder={'Last name'} onBlur={lastNameInputBlur} value={enteredLastName} onChange={lastNameChangeHandler}></input>
                    {lastNameIsInvalid && <p>Need to type something! </p>}
                    <input type="text" placeholder={'City'} onBlur={cityInputBlur} value={enteredCity} onChange={cityChangeHandler}></input>
                    {cityIsInvalid && <p>Need to type something! </p>}
                    <input type="number" placeholder={'Zip'} onBlur={zipInputBlur} value={enteredZip} onChange={zipChangeHandler}></input>
                    {zipIsInvalid && <p>Need to type something! </p>}
                    <input type="text" placeholder={'Adress'} onBlur={adressInputBlur} value={enteredAdress} onChange={adressChangeHandler}></input>
                    {adressIsInvalid && <p>Need to type something! </p>}
                    <input type="text" placeholder={'Email'} onBlur={emailInputBlur} value={enteredEmail} onChange={emailChangeHandler}></input>
                    {emailIsInvalid && <p>Wrong format! </p>}
                </div>
                <div className={styled.confirm}>
                    {formIsInvalid && <p>Fill in all cells correctly!!!</p>}
                    {!formIsInvalid && <button type="submit" >Confirm Order</button>}
                </div>
            </form>
        </div>
    )
}

export default Adress
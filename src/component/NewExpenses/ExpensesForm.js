import React from "react";
import { useState } from 'react';
import './ExpensesForm.css'

const ExpensesForm = () => {
    const [enteredtitle, setChangedTitle] = useState('');
    const [enteredamount, setChangedAmount] = useState('');
    const [entereddate, setChangedDate] = useState('');

    const TitleHandler = (event) =>{
           setChangedTitle(event.target.value);
        };
    const AmountHandler = (event) =>{
        setChangedAmount(event.target.value);
     };
     const DateHandler = (event) =>{
            setChangedDate(event.target.value);
     };
     const submitHandler = (event) =>{
         event.preventDefault();
        const ExpenseData = {
            title : enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate),
        };
        console.log(enteredtitle);
     }
    return(
        <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control"> 
                    <label>Title</label>
                    <input type = 'text' onChange={TitleHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = 'number' min='0.01' step='0.01' onChange={AmountHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = 'date' min='2019--01-01' max='2020-12-31' onChange={DateHandler} ></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = 'submit'>addExpenses</button>
            </div>
        </form>
    )
}
export default ExpensesForm;
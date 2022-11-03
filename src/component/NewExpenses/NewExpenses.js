import React from "react";
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";

const NewExpenses = ()=> {
    return(
        <div className="new-expense">
            <ExpensesForm></ExpensesForm>
            <div>
                <button>Test</button>
            </div>

        </div>
    )
}
export default NewExpenses;
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

function NewExpense(props) {
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseDataHandling = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const addingHandler = () => {
    setIsAdding(true);
  };
  const cancelHandler = () => {
    setIsAdding(false);
  };
  return (
    <div className="new-expense">
      {isAdding ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandling}
          onCancel={cancelHandler}
        />
      ) : (
        <button onClick={addingHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;

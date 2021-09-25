import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');
  const expenseFilterHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };
  const filterExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeYearFilter={expenseFilterHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpenseList item={filterExpenses}></ExpenseList>
    </Card>
  );
}

export default Expenses;

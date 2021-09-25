import './ExpenseFilter.css';
function ExpenseFilter(props) {
  const selectedYearHandler = (event) => {
    //console.log(event.target.value);
    props.onChangeYearFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year</label>
        <select
          name="year"
          id="year"
          value={props.selected}
          onChange={selectedYearHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;

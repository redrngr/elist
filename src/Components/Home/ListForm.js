import React from 'react';
import { connect } from 'react-redux';
import { searchEmployee, getEmployees } from '../../reducers/list-reducer';


class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' }
  }

  handleReset = () => {
    if (this.state.searchText) {
      this.setState(() => ({ searchText: '' }));
      this.props.getEmployees();
    }
  }

  handleSearch = () => this.props.searchEmployee(this.state.searchText)

  debounce = (fn, interval) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, arguments), interval);
    }
  }

  handleSearch = this.debounce(this.handleSearch, 300)

  handleChange = event => {
    this.setState(() => ({ searchText: event.target.value }));
    this.handleSearch();
  }

  render() {
    return (
      <form style={{ width: "100%" }} onReset={this.handleReset}>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">Search</span>
          <input
            name="search"
            className="form-control"
            type="search"
            aria-label="Search"
            placeholder="Enter the name"
            component="input"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <button className="btn btn-secondary" type="reset">Reset</button>
        </div>
      </form>
    )
  }
}

export default connect(null, { searchEmployee, getEmployees })(ListForm)
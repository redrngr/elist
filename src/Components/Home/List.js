import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Loader from '../Loader';
import { getEmployees, searchEmployee, deleteEmployee } from '../../reducers/list-reducer';

const mapStateToProps = (state) => ({
  employees: state.list.employees,
  searchText: state.list.searchText,
});


class List extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  handleChange = event => {
    this.props.searchEmployee(event.target.value);
  }

  handleClick = event => {
    this.props.deleteEmployee(+event.target.id);
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center" style={{ width: "100%" }}>
          <form style={{ width: "47%" }}>
            <label forhtml="searchField">Search employee</label>
            <input
              className="form-control"
              type="search"
              id="searchField"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleChange}
              value={this.props.searchText}
            />
          </form>
        </div>
        {this.props.isAsync ? <Loader /> :
          (<div className="nowrap d-flex flex-wrap justify-content-start">
            {this.props.employees.map((el) => <Card key={el.id} state={el} id={el.id} deleteCard={this.handleClick} />)}
          </div>)
        }
      </>
    )
  }
}

export default connect(mapStateToProps, { getEmployees, searchEmployee, deleteEmployee })(List);
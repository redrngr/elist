import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Loader from '../Loader';
import { getEmployees, searchEmployee, deleteEmployee, clearInput } from '../../reducers/list-reducer';

const mapStateToProps = state => ({
  employees: state.list.employees,
  inProgress: state.list.inProgress,
  searchText: state.list.searchText
});

class List extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  componentWillUnmount() {
    this.props.clearInput();
  }

  handleReset = () => {
    if (this.props.searchText) {
      this.props.clearInput();
      this.props.getEmployees();
    }
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
        <div className="d-flex justify-content-center ms-3" style={{ width: "35%" }}>
          <form style={{ width: "100%" }} onReset={this.handleReset}>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">Search</span>
              <input
                className="form-control"
                type="search"
                id="searchField"
                aria-label="Search"
                placeholder="Enter the name"
                onInput={this.handleChange}
                value={this.props.searchText}
              />
              <input className="btn btn-secondary" type="reset" value="RESET" />
            </div>
          </form>
        </div>
        <hr />
        {this.props.inProgress ? <Loader /> :
          this.props.employees.length !== 0 ?
            (<div className="nowrap d-flex flex-wrap justify-content-start">
              {this.props.employees.map((el) => <Card key={el.id} state={el} id={el.id} deleteCard={this.handleClick} />)}
            </div>)
            : <span className="message">Employee not found</span>}
      </>
    )
  }
}

export default connect(mapStateToProps, { getEmployees, searchEmployee, deleteEmployee, clearInput })(List);
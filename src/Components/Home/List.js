import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Loader from '../Loader';
import ListForm from './ListForm';
import { getEmployees, deleteEmployee } from '../../reducers/list-reducer';

const mapStateToProps = state => ({
  employees: state.list.employees,
  inProgress: state.list.inProgress,
});

class List extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  handleClick = event => {
    this.props.deleteEmployee(+event.target.id);
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center ms-3" style={{ width: "35%" }}>
          <ListForm />
        </div>
        <hr />
        {this.props.inProgress ? <Loader message="Loading..." /> :
          this.props.employees.length !== 0 ?
            (<div className="nowrap d-flex flex-wrap justify-content-start">
              {this.props.employees.map((el) => <Card key={el.id} state={el} id={el.id} deleteCard={this.handleClick} />)}
            </div>)
            : <span className="message">Employee not found</span>}
      </>
    )
  }
}

export default connect(mapStateToProps, { getEmployees, deleteEmployee })(List);
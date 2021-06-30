import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Loader from '../Loader'
import { LIST_PAGE_LOADED, SEARCH_FIELD_CHANGE, ASYNC_TOGGLE, DELETE_EMPLOYEE } from '../../actiontypes';
import * as axios from 'axios';

const mapStateToProps = (state) => ({
  employees: state.list.employees,
  searchText: state.list.searchText,
  isAsync: state.list.isAsync
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: LIST_PAGE_LOADED, payload }),
  onChangeText: (payload) => dispatch({ type: SEARCH_FIELD_CHANGE, payload }),
  onAsync: () => dispatch({ type: ASYNC_TOGGLE }),
  onDeleteCard: (payload, id) => dispatch({ type: DELETE_EMPLOYEE, payload, id })
});

class List extends React.Component {
  componentDidMount() {
    this.props.onAsync();
    axios.get('https://my-json-server.typicode.com/redrngr/api/employees')
      .then(res => {
        this.props.onAsync();
        this.props.onLoad(res.data)
      });
  }

  changeText = event => {
    this.props.onChangeText(event.target.value)
  }

  deleteCard = event => {
    const id = +event.target.id;
    const payload = axios.delete(`https://my-json-server.typicode.com/redrngr/api/employees/${id}`)
    this.props.onDeleteCard(payload, id)
  }

  render() {
    return (
      <>
        <div className="mb-3">
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.changeText}
              value={this.props.searchText}
            />
          </form>
        </div>
        {this.props.isAsync ? <Loader /> :
          (<div className="nowrap d-flex flex-wrap justify-content-between">
            {this.props.employees.map((el) => <Card key={el.id} state={el} id={el.id} deleteCard={this.deleteCard} />)}
          </div>)
        }
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
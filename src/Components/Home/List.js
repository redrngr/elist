import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Loader from '../Loader'
import { LIST_PAGE_LOADED, SEARCH_TEXT_CHANGE, ASYNC_TOGGLE } from '../../actiontypes';
import * as axios from 'axios';

const mapStateToProps = (state) => ({
  employees: state.list.employees,
  searchText: state.list.searchText,
  isAsync: state.list.isAsync
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: LIST_PAGE_LOADED, payload }),
  onChangeText: (payload) => dispatch({ type: SEARCH_TEXT_CHANGE, payload }),
  onAsync: () => dispatch({ type: ASYNC_TOGGLE })
});

class List extends React.Component {
  componentDidMount() {
    this.props.onAsync();
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.props.onAsync();
        this.props.onLoad(res.data)
      });
  }

  changeText = (event) => {
    this.props.onChangeText(event.target.value)
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
            {this.props.employees.map((el, id) => <Card key={id} state={el} id={id + 1} />)}
          </div>)
        }
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
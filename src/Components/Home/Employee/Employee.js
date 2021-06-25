import React from 'react';
import pic from '../../../assets/ava.png'

const Employee = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const user = props.state.store[id - 1];
  return (
    <div className="card mb-5" style={{ width: "18rem" }}>
      <img className="card-img-top" src={pic} alt="Pic" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Ut incididunt quis reprehenderit aliquip voluptate cupidatat. Deserunt excepteur eu adipisicing ex enim. Cupidatat non veniam eu in ipsum aute deserunt aute. Aute consectetur dolor irure aliqua esse aliqua dolor. Ipsum anim nisi esse sunt ipsum esse ea laborum.</p>
        {/* <Link className="btn btn-primary">Show more</Link> */}
      </div>
    </div>
  )
}

export default Employee;
import React from 'react'
import Partials_one from './partials/Partials_one';

function Profile(props) {
  return (
    <div style={{backgroundColor:'blue'}}>
      <h1>Profile</h1>
      {/* <Partials_one data={props.data}></Partials_one> */}
      <Partials_one></Partials_one>
    </div>
  );
}

export default Profile

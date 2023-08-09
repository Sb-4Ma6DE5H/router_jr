import React from 'react'
import Partials_two from './Partials_two'

function Partials_one(props) {
  return (
    <div style={{backgroundColor:'yellow',width:'500px'}}>
      <h1>partials one</h1>
      {/* <Partials_two data={props.data}></Partials_two> */}
      <Partials_two ></Partials_two>
    </div>
  )
}

export default Partials_one

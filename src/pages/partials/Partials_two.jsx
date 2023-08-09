import React,{useContext} from 'react'
import { AppContext } from '../../AppContext'

function Partials_two(props) {
const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'green',width:'300px'}}>
      {/* <h1>partials two {props.data} </h1> */}
      <h1>partials two {data} </h1>
    </div>
  )
}

export default Partials_two

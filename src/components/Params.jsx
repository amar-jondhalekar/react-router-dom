import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
  // useParam Hook 
const {id} = useParams();
  return (
    <div>
        Params: {id}
    </div>
  )
}

export default Params
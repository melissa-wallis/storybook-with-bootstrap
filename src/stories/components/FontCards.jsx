import React from 'react'
import ListGroupExample from './Typography'

const typography = [
  {
  
  }, 

]

export default function FontCards() {
  return (

    <div>{typography.map(color => <ListGroupExample/> )}</div>
  )
}

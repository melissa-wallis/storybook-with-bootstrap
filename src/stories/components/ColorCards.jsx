import React from 'react'
import ColorsExample from './Colors'

const colors = [
  {
    id: 1, 
    wcag: 'AA 5.31' , 
    number: 25, 
    hexcode: "#F6FEF9"
  }, 
  {
    id: 2, 
    wcag: '2.63' , 
    number: 500, 
    hexcode: "#12B76A"
  }, 
  {
    id: 3, 
    wcag: 'AAA' , 
    number: 900, 
    hexcode: "#054F31"
  }, 

]

export default function ColorCards() {
  return (

    <div>{colors.map(color => <ColorsExample wcag={color.wcag} number={color.number} hexcode={color.hexcode}/> )}</div>
  )
}

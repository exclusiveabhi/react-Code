import React from 'react'
import Navbar from './Navbar'
import ListItem from './ListItem'
import Addbtn from './Addbtn'
import "./Admin.css"

export default function AdminPannel() {
  return (
  <>
 <Navbar></Navbar>
 <br></br>
 <Addbtn></Addbtn>
 <br></br>
 <br></br>
 <br></br>
  <ListItem></ListItem>
  </>
  )
}

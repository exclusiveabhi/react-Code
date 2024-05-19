import React from 'react'
import "./Admin.css"

function Addbtn() {
  return (
   <>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Details
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body className inputs">
        <div>
       <label>First Name:</label><input type='text' placeholder='Enter your First Name' className='fname'></input><br></br>
       </div>
       <div></div>
       <label>Last Name:</label><br></br><input type='text' placeholder='Enter your Last Name' className='lname'></input><br></br>
       <label>Handle:</label><br></br><input type='text' placeholder='Enter your Handle' className='handle'></input>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Addbtn
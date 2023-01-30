import React from 'react'

function JoinRoom() {
  return (
    <>
        <h1>Join Room</h1>
        <div className="row mb-4">
            <div className="col-12 mb-4">
                <label htmlFor="join_room_form_name" className="form-label">Your Name</label>
                <input type="text" name="join_room_form_name" id="join_room_form_name" placeholder='Enter Your Name' className="form-control" />
            </div>
            <div className="col-12 mb-4">
                <label htmlFor="join_room_form_room_id" className="form-label">Room ID</label>
                <input type="text" name="join_room_form_room_id" id="join_room_form_room_id" placeholder='Enter Room ID' className="form-control" />
            </div>
            <div className="col-12 mb-4">
            <button className="btn btn-success" >JOIN ROOM</button>
            </div>
        </div>
    </>
  )
}

export default JoinRoom
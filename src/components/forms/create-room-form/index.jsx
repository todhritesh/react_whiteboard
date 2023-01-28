import React from 'react'

function CreateRoom() {
  return (
    <>
        <h1>Create Room</h1>
        <div className="row mb-4">
            <div className="col-12 mb-4">
                <label htmlFor="create_room_form_name" className="form-label">Your Name</label>
                <input type="text" name="create_room_form_name" id="create_room_form_name" placeholder='Enter Your Name' className="form-control" />
            </div>
            <div className="col-12 mb-4">
                <label htmlFor="create_room_form_room_id" className="form-label">Room ID</label>
                <div className="d-lg-flex">
                    <input type="text" name="create_room_form_room_id" id="create_room_form_room_id" placeholder='Generate Room ID' className="form-control" />
                    <button className="btn btn-primary mx-2 btn-sm  mt-1 mt-lg-0">GENERATE</button>
                    <button className="btn btn-outline-success btn-sm  mt-1 mt-lg-0">COPY</button>
                </div>
            </div>
            <div className="col-12 mb-4">
                <input type="submit" className="btn btn-success" value="CREATE ROOM." />
            </div>
        </div>
    </>
  )
}

export default CreateRoom
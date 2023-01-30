import React, { useEffect, useState } from 'react'

function CreateRoom() {

    const [roomID , setRoomID] = useState('')

    useEffect(()=>{
        generateRoomID()
    },[])

    function generateId(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }

    function generateRoomID() {
        const id = generateId()
        setRoomID(id)
      }
      

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
                    <input disabled value={roomID} type="text" name="create_room_form_room_id" id="create_room_form_room_id" placeholder='Generate Room ID' className="form-control" />
                    <button onClick={generateRoomID} className="btn btn-primary mx-2 btn-sm  mt-1 mt-lg-0">GENERATE</button>
                    <button className="btn btn-outline-success btn-sm  mt-1 mt-lg-0">COPY</button>
                </div>
            </div>
            <div className="col-12 mb-4">
                <button className="btn btn-success" >CREATE ROOM</button>
            </div>
        </div>
    </>
  )
}

export default CreateRoom
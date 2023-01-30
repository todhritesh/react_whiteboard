import React from 'react'
import CreateRoom from './create-room-form'
import JoinRoom from './join-room-form'
import styles from "./index.module.css"

function Forms() {
  return (
    <div className="container">
        <div className="row mt-5 justify-content-between gap-md-0 gap-4">
        <div className="mt-md-5"></div>
        <div className="mt-md-5"></div>
        <div className="mt-md-5"></div>
            <div className="col-md-5 d-flex flex-column align-items-center px-2">
                <div className={styles.form_container}>
                    <CreateRoom/>
                </div>
            </div>
            <div className="col-md-5 d-flex flex-column align-items-center px-2">
                <div className={styles.form_container}>
                    <JoinRoom/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forms
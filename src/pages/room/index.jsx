import React, { useRef, useState } from 'react'
import Whiteboard from '../../components/whiteboard'
import './index.css'

function Room() {
  const [tool, setTool] = useState('pencil')
  const [color, setColor] = useState('black')

  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [element , setElement] = useState([])
  const [history , setHistory] = useState([])

  function handleClearCanvas (){
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillRect = 'white'
    ctxRef.current.clearRect(
      0,0,canvasRef.current.width,canvasRef.current.height
    )
    setElement([])
    setHistory([])
  }

  function handleUndo(){
    setHistory(prev=>{
      return [
        ...prev,
        element[element.length-1]
      ]
    })
    setElement(prev=>prev.slice(0,prev.length-1))
  }

  function handleRedo(){
    setElement(prev=>([...prev , history[history.length-1]]))
    setHistory(prev=>([prev.slice(0,prev.length-1)]))
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className='text-center' >Whiteboard Room</h1>
        <div className="col-12 d-flex justify-content-between">
          <div className='d-flex gap-5 ' >
            <div className="d-flex gap-3">
              <div className="d-flex gap-1">
                <input checked={tool==='pencil'} type="radio" name="tool" value="pencil" onChange={e => setTool(e.target.value)} id="pencil" className="form-check-input" />
                <label htmlFor='pencil' className="form-check-lebel">Pencil</label>
              </div>
              <div className="d-flex gap-1">
                <input checked={tool==='line'} type="radio" name="tool" value="line" onChange={e => setTool(e.target.value)} id="line" className="form-check-input" />
                <label htmlFor='line' className="form-check-lebel">Line</label>
              </div>
              <div className="d-flex gap-1">
                <input checked={tool==='rectangle'} type="radio" name="tool" value="rectangle" onChange={e => setTool(e.target.value)} id="rectangle" className="form-check-input" />
                <label htmlFor='rectangle' className="form-check-lebel">Rectangle</label>
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex gap-2">
                <label htmlFor='color' className="form-check-lebel">Color</label>
                <input type="color" name="color" value={color} onChange={e => setColor(e.target.value)} id="color" className="border-0" />
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex gap-2">
                <button disabled={element.length===0} onClick={handleUndo} className="btn btn-warning btn-sm">Undo</button>
                <button disabled={history.length<1} onClick={handleRedo} className="btn btn-success btn-sm">Redo</button>
              </div>
            </div>
          </div>

          <div className="d-flex juftify-self-end">
            <div className="d-flex gap-2">
              <button onClick={handleClearCanvas} className="btn btn-danger ing btn-sm">Clear</button>
            </div>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-12 p-4 canvas-container">
          <Whiteboard color={color} tool={tool} canvasRef={canvasRef} ctxRef={ctxRef} element={element} setElement={setElement} />
        </div>
      </div>
    </div>
  )
}

export default Room
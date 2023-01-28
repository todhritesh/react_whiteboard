import React, { useEffect, useState , useLayoutEffect } from 'react'
import rough from "roughjs"

function Whiteboard({canvasRef , ctxRef , element , setElement}) {

  const [isDrawing , setIsDrawing] = useState(false)

  useEffect(()=>{
    const canvas = canvasRef.current
    console.log(canvas)
    const ctx = canvas.getContext("2d")
    ctxRef.current = ctx
  },[])

  const handleMouseDown = (e) => {
    const {offsetX , offsetY} = e.nativeEvent
    
    setElement(prev=>(
      [
        ...prev,
        {
          type:"pencil",
          offsetX,
          offsetY,
          path:[[offsetX,offsetY]],
          stroke:"#000000"
        }
      ]
    ))
    setIsDrawing(true)
  }
  const handleMouseMove = (e) => {
    const {offsetX , offsetY} = e.nativeEvent
    if(isDrawing){
      const {path} = element[element.length-1]
      const newPath = [...path , [offsetX , offsetY]]
      setElement(prev=>{
        return prev.map((item , i)=>{
          if(i===element.length-1){
            return {
              ...item , path:newPath
            }
          }else{
            return item
          }
        })
      })
    }
  }
  const handleMouseUp = (e) => {setIsDrawing(false)}

  useLayoutEffect(()=>{
    const roughCanvas = rough.canvas(canvasRef.current)
    element.forEach(item=>{
      roughCanvas.linearPath(item.path)
    })
  },[element])

  return (
    <>
    <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className='h-100 w-100 border border-dark border-3' ></canvas>
    </>
  )
}

export default Whiteboard
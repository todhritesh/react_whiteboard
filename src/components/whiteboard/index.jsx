import React, { useEffect, useState , useLayoutEffect } from 'react'
import rough , {} from "roughjs"
import './index.css'

const roughGenerator = rough.generator()

function Whiteboard({canvasRef , color , tool , ctxRef , element , setElement}) {

  const [isDrawing , setIsDrawing] = useState(false)

  useEffect(()=>{
    const canvas = canvasRef.current
    canvas.height = window.innerHeight *2
    canvas.width = window.innerWidth *2
    const ctx = canvas.getContext("2d")
    ctx.strokeStyle = color 
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctxRef.current = ctx
  },[])

  useEffect(()=>{
    ctxRef.current.strokeStyle = color;
  },[color])



  const handleMouseDown = (e) => {
    const {offsetX , offsetY} = e.nativeEvent

    if(tool==='pencil'){
      setElement(prev=>(
        [
          ...prev,
          {
            type:"pencil",
            offsetX,
            offsetY,
            path:[[offsetX,offsetY]],
            stroke:color
          }
        ]
      ))
    }else if(tool==='line'){
      setElement(prev=>([
        ...prev,
        {
          type:"line",
          offsetX,
          offsetY,
          width:offsetX,
          height:offsetY,
          stroke:color
        }
      ]))
    } else if(tool==='rectangle'){
      setElement(prev=>([
        ...prev,
        {
          type:"rectangle",
          offsetX,
          offsetY,
          width:0,
          height:0,
          stroke:color
        }
      ]))
    }
    setIsDrawing(true)
    
  }
  
  const handleMouseMove = (e) => {
    const {offsetX , offsetY} = e.nativeEvent
    if(isDrawing){
      if(tool==='pencil'){
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
      } else if(tool==='line'){
        setElement(prev=>{
          return prev.map((item , i)=>{
            if(i===element.length-1){
              return {
                ...item , 
                width:offsetX,
                height:offsetY
              }
            }else{
              return item
            }
          })
        })
      } else if(tool==='rectangle'){
        setElement(prev=>{
          return prev.map((item , i)=>{
            if(i===element.length-1){
              return {
                ...item , 
                width:offsetX - item.offsetX ,
                height:offsetY - item.offsetY 
              }
            }else{
              return item
            }
          })
        })
      }
    }
  }
  const handleMouseUp = (e) => {setIsDrawing(false)}

  useLayoutEffect(()=>{

    if(element.length>0){
      ctxRef.current.clearRect(
        0,0,canvasRef.current.width,canvasRef.current.height
      )
    }

    const roughCanvas = rough.canvas(canvasRef.current)
    element.forEach(item=>{
      if(item.type==='pencil'){
        roughCanvas.draw(
          roughCanvas.linearPath(item.path,{
            stroke:item.stroke,
            strokeWidth: 5,
            roughness : 0
          })
        )
      }else if(item.type==='line'){
        roughCanvas.draw(
          roughGenerator.line(item.offsetX,item.offsetY , item.width , item.height,{
            stroke:item.stroke,
            strokeWidth: 5,
            roughness : 0
          })
        )
      } else if(item.type==='rectangle'){
        roughCanvas.draw(
          roughGenerator.rectangle(
              item.offsetX,item.offsetY , item.width , item.height ,
              {
                stroke:item.stroke,
                strokeWidth: 5,
                roughness : 0
              }
            )
        )
      }
    })
  },[element])

  return (
    <div onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className='border border-dark border-3 overflow-hidden' >
    <canvas className='' ref={canvasRef} />
    </div>
  )
}

export default Whiteboard
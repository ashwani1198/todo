import React from 'react'

export function CreateTodo() {
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:700,placeContent:'center'}}>
        <input style={{
            padding:10,
            margin: 10
        }} type="text" placeholder="title"/>
        <br></br>
        <input style={{
            padding:10,
            margin: 10
        }} type="text" placeholder="description"/>
        <br></br>
        <button style={{
            padding:10,
            margin: 10
        }}>Add a Todo</button>
    </div>
  )
}


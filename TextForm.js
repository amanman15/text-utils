import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText]=useState("")
    // text="aman" wrong way to set the text
    // setText("New Text");
    const[styleVal, styleFUNC]=useState({
      color:"black"
    })
    const handleOnChange = (event) => {
      console.log("onChage running")
      setText(event.target.value)
    }
    const handleUpClick = () => {
        console.log("this is converted to upper case" + text)
        let newText=text.toUpperCase()
        setText(newText)
      }
    
    const originalText = () => {
        if (styleVal.color==="blue"){
          styleFUNC({
            color: "black",
            backgroundColor:"white"
          })}
        
        console.log("Changed to original")
        let newText=text.toLowerCase()
        setText(newText)
    }    
    const clearText = () => {
        setText("")
    }    
    const changeColor = (event) => {

        // console.log("Changed to original")
        // // let newText=text.concat(" aman")
        // setText({

        // })
        styleFUNC({
          color: "blue",
          backgroundColor: "black"
        })
    }      

    
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
    <div className="mb-3">
    {/* <label for="textArea" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" cols="100" style={styleVal}></textarea>
    </div>
    <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-1"  onClick={originalText}>Convert to originalText</button>
    <button className="btn btn-primary mx-1"  onClick={changeColor}>Change the color</button>
    <button className="btn btn-primary mx-1"  onClick={clearText}>Clear the text</button>


    </div>
    <div className="container my-3">
        <h1>Your text has</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} time to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

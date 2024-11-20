// import React, {useState} from 'react'

// export default function About() {
//     const[myStyle, setMyStle]=useState(
//     {
//         color: 'black',
//         backgroundColor: 'white',
//     }    )
//     const[btnText, btnState]=useState("Enable Dark Mode")
//     const[btnType, btnTypeFunc]=useState("btn btn-secondary")
//     const toogleChange = ()=>{
//         if(myStyle.color === 'black'){
//         setMyStle({
//             color: "white",
//             backgroundColor: "purple"
            
//         })
//         btnState("Enable Light Mode")
//         btnTypeFunc("btn btn-primary")
//     }  else{
//         setMyStle({
//             color: "black",
//             backgroundColor:"white"
//         })
//         btnState("Enable Dark Mode")
//         btnTypeFunc("btn btn-secondary")

//     } }
    
    
//   return (
//     <div className="container" style={myStyle}>
//         <h1>About Us</h1>
//                 <div className="accordion" id="accordionPanelsStayOpenExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
//                         Accordion Item #1
//                     </button>
//                     </h2>
//                     <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
//                     <div className="accordion-body">
//                         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
//                         Accordion Item #2
//                     </button>
//                     </h2>
//                     <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
//                     <div className="accordion-body">
//                         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//                         Accordion Item #3
//                     </button>
//                     </h2>
//                     <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
//                     <div className="accordion-body">
//                         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//         <div className="container my-3">
//         <button onClick={toogleChange} className={btnType}>{btnText}</button>
//         </div>
//     </div>
//   )
// }
import React, {useState} from 'react'
// aman
export default function About() {
    const[myStyle, styleFunc]=useState({
        color: 'black',
        backgroundColor: "white",
    })
    const[buttonText, buttonFunc]=useState("Enable Dark Mode")
    
    const ChangeColor = () => {
        if (myStyle.color==="black"){
            styleFunc({
                color:"white",
                backgroundColor: "purple",
                border: "2px solid white"
            })
            buttonFunc("Enable Light Mode")
        }
        else{
            styleFunc({
                color:"black",
                backgroundColor: "white"
            })
            buttonFunc("Enable Dark Mode")
        }
    }
        
  return (
    <div className="container" style={myStyle}>
        <h2> About Me</h2>
        <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={ChangeColor} className="btn btn-primary">{buttonText}</button>

</div>
    </div>
  )
}

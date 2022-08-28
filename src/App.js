import React, { useState } from 'react'
import {Button} from 'antd'
import HomePage from './pages/HomePage/index'
// import "./app.css"
function App() {
  const [randomTop, setRandomTop] = useState(300)
  const [randomLeft, setRandomLeft] = useState(300)

  const handleOnMouse = (e) => {
    setRandomTop(Math.random() * e.clientX + 200)
    setRandomLeft(Math.random() * e.clientY + 200)
  }
  console.log(randomTop)

  return (
    <div className="container" style={{height: "100vh"}}>
      {/* <Button style={{left: `${randomLeft}px`, top: `${randomTop}px`, position: "absolute"}} type="primary" 
      onMouseEnter={handleOnMouse}
      >Vao day</Button> */}
      <HomePage />
    </div>
  );
}

export default App;

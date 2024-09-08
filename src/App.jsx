import React from 'react'
import { useState } from 'react';
import SegmentPopup from './assets/components/SegmentPopup';
const App = () => {
  const [popup, setPopup] = useState(false)
  const togglePopup = () => {
    setPopup(!popup)
  };


  return (
    <div className='App'>

<button onClick={togglePopup}>Save Segment</button>

{/* 1. Conditionally render popup */}


{popup && <SegmentPopup closePopup={togglePopup}/>}

    </div>
  )
}

export default App
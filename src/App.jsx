import React from 'react'
import { useState } from 'react';
const App = () => {
  const [popup, setPopup] = useState(false)
  const togglePopup = () => {
    setPopup(!popup)
  };


  return (
    <div className='App'>

<button onClick={togglePopup}>Save Segment</button>

{/* 1. Conditionally render popup */}


{popup && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={togglePopup}>Close</button>
            <p>popup here</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
import { useState } from 'react';

function SegmentPopup({ closePopup }) {
  const [segmentName, setSegmentName] = useState('');


     const handleSegmentName = (e) => {
    setSegmentName(e.target.value);
  };





  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={closePopup}>Close</button>

        {/* Input*/}
        <p>Enter the Name of the Segment:</p>
        <input 
          type="text" 
          placeholder="Segment Name" 
          value={segmentName} 
          onChange={handleSegmentName} 
        />
        {/* <p>Segment Name: {segmentName}</p> */}
      </div>
    </div>
  );
}

export default SegmentPopup;
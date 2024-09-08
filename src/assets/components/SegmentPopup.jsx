import { useState } from 'react';

function SegmentPopup({ closePopup }) {
  const [segmentName, setSegmentName] = useState('');
   const [selectedSchema, setSelectedSchema] = useState('');

     const handleSegmentName = (e) => {
    setSegmentName(e.target.value);
  };


  //schema already provided
  const schema = [

    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' }
  ];


  const handleSchemaChange = (e) => {
    setSelectedSchema(e.target.value);
  };





  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={closePopup}>Close</button>

        {/* Input Enter*/}
        <p>Enter the Name of the Segment:</p>
        <input 
          type="text" 
          placeholder="Segment Name" 
          value={segmentName} 
          onChange={handleSegmentName} 
        />
        {/* <p>Segment Name: {segmentName}</p> */}
    
    
    {/* {dropdown} */}
    <p>Add schema to segment:</p>

    
    <select value={selectedSchema} onChange={handleSchemaChange}>
          <option value="" >Select schema </option>

          {schema.map(option => (
            <option key={option.value} >
              {option.label}
            </option>
          ))}
        </select>



    <button onClick={() => {  }}>

          + Add new schema
</button>
    
    
    
      </div>
    </div>
  );
}

export default SegmentPopup;
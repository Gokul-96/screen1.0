import { useState } from 'react';

function SegmentPopup({ closePopup }) {
  const [segmentName, setSegmentName] = useState('');
   const [selectedSchemas, setSelectedSchemas] = useState('[]');
   const [dropdowns, setDropdowns] = useState([]);

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


  const handleSchemaChange = (index, value) => {
    const newSelectedSchemas = [...selectedSchemas];
    newSelectedSchemas[index] = value;
    setSelectedSchemas(newSelectedSchemas);
  };


   // Add a new dropdown with default (empty) selected schema
  const addNewDropdown = () => {
   
    setDropdowns([...dropdowns, '']);
  };

  const availableOptions = (selectedIndex) => {
    // Filter out options that are already selected except for the one being modified
    return schema.filter(option => 
      !selectedSchemas.includes(option.value) || option.value === selectedSchemas[selectedIndex]
    );
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
    
    
   {/* Dynamically added dropdowns */}
   <div style={{ border: '1px solid blue', padding: '10px', marginTop: '10px' }}>
          <p>Added Schemas:</p>
          {dropdowns.map((dropdown, index) => (
            <select 
              key={index}
              value={selectedSchemas[index] || ''} 
              onChange={(e) => handleSchemaChange(index, e.target.value)}
            >
          <option value="" disabled>Select schema </option>

          {availableOptions(index).map(option => (
            <option key={option.value} value={option.value} >
              {option.label}
            </option>
          ))}
        </select>
 ))}
        </div>

        <p>Add schema to segment:</p>
    <button onClick={addNewDropdown}>

          + Add new schema
</button>
    
    
    
      </div>
    </div>
  );
}

export default SegmentPopup;
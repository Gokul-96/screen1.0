import { useState } from 'react';
import axios from 'axios';
function SegmentPopup({ closePopup }) {
  const [segmentName, setSegmentName] = useState('');
   const [selectedSchemas, setSelectedSchemas] = useState('[]');
   const [dropdowns, setDropdowns] = useState([]);
   const [currentSchema, setCurrentSchema] = useState('');

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
    if (currentSchema && !selectedSchemas.includes(currentSchema)) {
      // Add selected schema to the list of schemas
      setDropdowns([...dropdowns, currentSchema]);
      setSelectedSchemas([...selectedSchemas, currentSchema]);

      // Reset current schema selection
      setCurrentSchema('');
    }
  };

   // Filter out options that are already selected except for the one being modified
  const availableOptions = (selectedIndex) => {
    return schema.filter(option => 
      !selectedSchemas.includes(option.value) || option.value === selectedSchemas[selectedIndex]
    );
  };



  // Prepare data in the required format
  const handleSaveSegment = () => {
    const schema1 = selectedSchemas.map(schemaValue => {
      const schemaOption = schema.find(option => option.value === schemaValue);
      return { [schemaValue]: schemaOption?.label };
    });

    const data = {
      segment_name: segmentName,
      schema: schema
    };



    // Send data (Webhook URL)
    axios.post('https://webhook.site/c2bbde03-cd05-485d-9c21-e31d6636689a', data)
      .then(response => {
        console.log('Data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
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


            {/* Dropdown for adding a new schema */}
            <p>Add schema to segment:</p>
        <select value={currentSchema} onChange={(e) => setCurrentSchema(e.target.value)}>
          <option value="" disabled>Select schema</option>
          {schema.filter(option => !selectedSchemas.includes(option.value)).map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <p>Add schema to segment:</p>
    <button onClick={addNewDropdown}>

          + Add new schema
</button>
<button onClick={handleSaveSegment}>Save Segment</button>
    
    
      </div>
    </div>
  );
}

export default SegmentPopup;
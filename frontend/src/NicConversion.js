import React , { useState } from 'react'
import "./NicConversion.css"

export default function NicConversion() {
  const [nicNumber, setNICNumber] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you have a function to extract gender and birthday from the NIC number
    const { extractedGender, extractedBirthday } = extractGenderAndBirthday(nicNumber);
    setGender(extractedGender);
    setBirthday(extractedBirthday);
  };

  const extractGenderAndBirthday = (nic) => {
    // Logic to extract gender and birthday from the NIC number
    return {
      extractedGender: 'Male', // Example value, replace with actual logic
      extractedBirthday: '1990-01-01', // Example value, replace with actual logic
    };
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1 className="page-name">Welcome to NIC Converter</h1>
          <p>Please fill and submit NIC number to get birthday and gender.</p>
          <hr />
          <label htmlFor="nicInput">NIC Number:</label>
          <input
            type="text"
            id="nicInput"
            value={nicNumber}
            onChange={(e) => setNICNumber(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
          <br />
          <label>Gender:</label>
          <input type="text" value={gender} readOnly />
          <br />
          <label>Birthday:</label>
          <input type="text" value={birthday} readOnly />
        </div>
      </form>
    </div>

  )
}

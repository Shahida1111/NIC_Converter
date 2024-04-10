import React, { useState } from 'react';
import './NicConversion.css';

export default function NicConversion() {
  const [nicNumber, setNICNumber] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const extractGenderAndBirthday = (NICNo) => {
    let dayText = 0;
    let year = '';
    let month = '';
    let day = '';

    if (NICNo.length !== 10 && NICNo.length !== 12) {
      setError('Invalid NIC NO');
      return;
    } else if (NICNo.length === 10 && !Number(NICNo.substr(0, 9))) {
      setError('Invalid NIC NO');
      return;
    }

    // Year
    if (NICNo.length === 10) {
      year = '19' + NICNo.substr(0, 2);
      dayText = parseInt(NICNo.substr(2, 3));
    } else {
      year = NICNo.substr(0, 4);
      dayText = parseInt(NICNo.substr(4, 3));
    }

    // Gender
    let extractedGender = '';
    if (dayText > 500) {
      extractedGender = 'Female';
      dayText = dayText - 500;
    } else {
      extractedGender = 'Male';
    }

    // Day Digit Validation
    if (dayText < 1 || dayText > 366) {
      setError('Invalid NIC NO');
      return;
    }

    // Month
    if (dayText > 335) {
      day = dayText - 335;
      month = 'December';
    } else if (dayText > 305) {
      day = dayText - 305;
      month = 'November';
    } else if (dayText > 274) {
      day = dayText - 274;
      month = 'October';
    } else if (dayText > 244) {
      day = dayText - 244;
      month = 'September';
    } else if (dayText > 213) {
      day = dayText - 213;
      month = 'August';
    } else if (dayText > 182) {
      day = dayText - 182;
      month = 'July';
    } else if (dayText > 152) {
      day = dayText - 152;
      month = 'June';
    } else if (dayText > 121) {
      day = dayText - 121;
      month = 'May';
    } else if (dayText > 91) {
      day = dayText - 91;
      month = 'April';
    } else if (dayText > 60) {
      day = dayText - 60;
      month = 'March';
    } else if (dayText > 31) {
      day = dayText - 31;
      month = 'February';
    } else {
      month = 'January';
      day = dayText;
    }

    // Calculate Age
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    const ageDiff = today.getTime() - birthDate.getTime();
    const ageInYears = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));

    setGender(extractedGender);
    setBirthday(`${year}-${month}-${day}`);
    setError('');
    setAge(`You are ${ageInYears} years old.`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    extractGenderAndBirthday(nicNumber);
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
          <br />
          <label>Age:</label>
          <input type="text" value={age} readOnly />
          <br />
          <p id="error">{error}</p>
        </div>
      </form>
    </div>
  );
}

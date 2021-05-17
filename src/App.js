import React, { useState } from 'react';

function App() {

  const [inputList, setInputList] = useState([
    { firstName: "John", lastName: "Adibe" }
  ])

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  const handleAddField = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
    // --- OR --- //
    // const list = [...inputList];
    // list.push({ firstName: "", lastName: "" });
    // setInputList(list);
  }

  const handleRemoveField = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  return (
    <div className="App">
      <input
        type="button"
        value="Add Field +"
        onClick={handleAddField}/>
      {inputList.map((item, index) =>
        <div key={index} className="box" style={{ textAlign: 'center' }}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="mr-10"
            value={item.firstName}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="mr-10"
            value={item.lastName}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="button"
            value="Delete Field x"
            className="mr-10"
            onClick={(e) => handleRemoveField(index)}
          />

          {/* --- A case when one wants the add button to appear at the very last field--- */}
          {/* {inputList.length - 1 === index &&
            <input
              type="button"
              value="Add +"
              onClick={handleAddField}
            />
          } */}
        </div>
      )}
      
      <pre>
        {JSON.stringify(inputList, null, 2)}
      </pre>
    </div>
  );
}

export default App;
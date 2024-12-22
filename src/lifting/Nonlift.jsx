import React, { useState } from "react";
function Nonlift() {
 const [input, setInput] = useState("");
//  jika tidak menggunakan lifting 
//  variabel , function handling, Form input dan hasil di jadikannya satu file
const handleChange = (e) => {
 setInput(e.target.value);
};

 return (
      <div>
       <h2>Contoh Tanpa Lifting State</h2>
       <input 
        type="text" 
        value={input} 
        onChange={handleChange} 
        placeholder="Ketik sesuatu..."
       />
       <p>Input: {input}</p>
      </div>
     );
    }
    export default Nonlift;
    

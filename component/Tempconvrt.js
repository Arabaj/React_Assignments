import React, { useState } from "react";

const Tempconvrt = () => {
  const [celcius, setCelcius] = useState();
    const[farhenit,setFarhenit]=useState()
 const handlecelcius=(e)=>{
    const celcius=e.target.value
    setCelcius(celcius);
    if(celcius==='0'){
        setFarhenit('')
 }else{
    setFarhenit((celcius* 9/5)+32)
 }
}
const handlefarhenit=(e)=>{
    const farhenit=e.target.value
    setFarhenit(farhenit);
    if(farhenit==='0'){
        setCelcius('')
    }else{
        setCelcius((farhenit-32)*5/9)
    }
}
  return (
    <div className="card-container" style={{ width: "400px" }}>
      <h1>Temprature Converter</h1>
      <label>Celcius:</label>
      <input className="temp" value={celcius} placeholder="celcius" type="number" onChange={handlecelcius} />
      <label>Farhenit:</label>
      <input className="temp" value={farhenit} placeholder="farhenit" type="number" onChange={handlefarhenit} />
      {/* <button>Celcius</button>
      <button>Fahrenheit</button> */}
    </div>
  );
};

export default Tempconvrt;


import React, { useState } from 'react';
import './App.css';
function App() {
 const [input, setInput] = useState('');
 // Function to handle button clicks
 const handleClick = (value) => {
 setInput(input + value);
 };
 // Function to calculate the result
 const calculateResult = () => {
 try {
 setInput(eval(input)); // Evaluates the mathematical expression
 } catch {
 setInput('Error');
 }
 };
 // Function to clear input
 const clearInput = () => {
 setInput('');
 };
 return (
 <div className="calculator">
 <h2>React Calculator</h2>
 <input type="text" value={input} readOnly />
 <div className="buttons">
 {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((item) => (
 <button key={item} onClick={() => item === '=' ? calculateResult() :
handleClick(item)}>
 {item}
 </button>
 ))}
 <button className="clear" onClick={clearInput}>C</button>
 </div>
 </div>
 );
}
export default App;
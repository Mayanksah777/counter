
import { useState,useeffect } from 'react';
import './App.css';
import { useEffect } from 'react';

const Person=(props)=>
{
  return (
  <>
  <h1>Name: {props.name}</h1>
  <h2>Last name: {props.lastname}</h2>
  <h3>Age: 30</h3>
  </>
  )
}


const App=()=> {
  const[counter,setcounter]=useState(0);
  useEffect(()=>
  {
    alert("You've change the counter to "+counter)

  },[counter]);
  return(
   <div className='App'>
    <button onClick={()=>setcounter((prevcount=>prevcount-1))}>-</button>
    <h1>{counter}</h1>
    <button onClick={()=>setcounter((prevcount=>prevcount+1))}>+</button>
   </div>
  );
}

export default App;
/* react rule->
if we want to render 2 diff element we need to wrap them in react fragment
<> </>
 */

//props {properties} are a way to pass data from one component to another
//whenever we call something as function and it start with use like useState it is called reacthook